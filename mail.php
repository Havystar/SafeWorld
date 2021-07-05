< !DOCTYPE HTML><html lang="pl"><head><meta charset="utf-8"/><title>Safe World</title></head><body><?php //otwieranie pliku z emaliami jest on dostępny tylko dla serwera wiec nikt bez prawa właściciela nie może wejść do pliku
$today=date("d.m.y");
$emails=array();
$dates=array();
$regions=array();
$i=0;
$plik="emails.txt";
$file=fopen($plik, "r");
flock($file, 1);

while( !feof($file)) {
  if($i%3==0) {
    array_push($emails, fgets($file));
  }

  else if($i%3==1) {
    array_push($regions, fgets($file));
  }

  else {
    array_push($dates, fgets($file));
  }

  $i++;
}

flock($file, 3);
fclose($file);

//zapiszywanie pliku ze zmienioną ostatnią datą wysłania alertu do danej osoby aby nie wysyłać kilkunastu dziennie
$file=fopen($plik, "w");
flock($file, 2);

foreach ($emails as $key=>$email) {
  fwrite($file, $email);
  fwrite($file, $regions[$key]);

  if($key < count($emails)-1) {
    fwrite($file, $today . "\n");
  }

  else {
    fwrite($file, $today);
  }
}

flock($file, 3);
fclose($file);


//plik z danymi o niebezpieczeństwach pogodowych 
$levels;
$areas;
$type;
$i=0;
$plik="alerts.txt";
$file=fopen($plik, "r");
flock($file, 1);

while( !feof($file)) {
  if($i%3==0) {
    $levels=explode(',', trim(fgets($file)));
  }

  else if($i%3==1) {
    $areas=explode(',', trim(fgets($file)));
  }

  else {
    $type=explode(',', trim(fgets($file)));
  }

  $i++;
}

flock($file, 3);
fclose($file);




function multi_attach_mail($to, $subject, $message, $senderEmail, $senderName) {

  $from=$senderName." <".$senderEmail.">";
  $headers="From: $from";

  $semi_rand=md5(time());
  $mime_boundary="==Multipart_Boundary_x{$semi_rand}x";

  $headers .="\nMIME-Version: 1.0\n". "Content-Type: multipart/mixed;\n". " boundary=\"{$mime_boundary}\"";

  $message="--{$mime_boundary}\n". "Content-Type: text/html; charset=\"UTF-8\"\n". "Content-Transfer-Encoding: 7bit\n\n". $message . "\n\n";

  $message .="--{$mime_boundary}--";
  $returnpath="-f". $senderEmail;

  $mail=@mail($to, $subject, $message, $headers, $returnpath);

  if($mail) {
    return true;
  }

  else {
    return false;
  }
}




foreach ($emails as $key=>$email) {

  if(trim($dates[$key]) !=$today) {
    $trimmedRegion=trim($regions[$key]);

    foreach ($areas as $key2=>$area) {
      if ($trimmedRegion==$area) {



        $to=$email;
        $from='weather_alert@safeworld.y0.pl';
        $fromName='Safe World Weather Alert';

        $subject='Weather Alert!';

        $name='Safe World Weather Alert';
        $htmlContent=' <h3>Email send by Safe World Weather Alert </h3><h4>In your area dangerous weather phenomena occur. Phenomenon level is: '.$levels[$key2].'</h4> <p><b>Type of weather phenomena: </b> '.$type[$key2].'</p>'.'<p> Please do not reply to this email was generated automatically in: '.$dates[$key].'</p>';


        $sendEmail=multi_attach_mail($to, $subject, $htmlContent, $from, $fromName);


        if($sendEmail) {
          # echo 'The email has sent successfully. ';
          # echo $email . '<br>';
        }

        else {
          # echo 'Mail sending failed!';
        }
      }

      else {
        #echo "nie ma zagrożenia dla: ". $regions[$key]. '<br>';
      }
    }
  }
}


?></body></html>