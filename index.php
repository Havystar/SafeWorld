<!DOCTYPE HTML>
<html>

<head>
    <title>Safe World</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="assets/css/main.css" />

</head>

<body>

    <!-- Nagłówek -->
    <header id="header" class="alt">
        <div class="logo"><a href="index.html">Safe World</a></div>
        <a href="#menu" class="toggle"><span>Menu</span></a>
    </header>

    <!-- Menu -->
    <nav id="menu">
        <ul class="links">
            <li><a href="index.php">Strona główna</a></li>
            <li><a href="safeworld.html">Aplikacja Safe World</a></li>
            <li><a href="kontakt.php">Kontakt</a></li>
        </ul>
    </nav>

    <!-- Banner -->

    <section id="banner">
        <div class="inner">
            <h1>SAFE WORLD</h1>
            <a href="#one" class="button special scrolly">Idź dalej</a>
        </div>
    </section>

    <!-- Pierwszy banner -->
    <section id="one" class="wrapper style2">
        <div class="inner">
            <div>
                <div class="box">

                    <div class="content">
                        <header class="align-center">
                            <h2>Witamy</h2>
                        </header>
                        <hr/>
                        <div class="strong align-center">
                            <p>Serdecznie witamy na stronie internetowej dzięki której będziesz na bierząco
                                informowany o niebezpieczeństwach!
                                <br/>
                                Zapraszamy do zapoznania się z naszą
                                ofertą i odwiedzenia aplikacji SAFE WORLD.
                                <br/>
                                W aplikacji Safe World można sprawdzić stopień zagrożenie terrorystycznego jak i poziom działań wojennych.
                                Dane są pobierane z Wikipedii a następnie wyświetlane w przystępnej formie. Aby otrzymać dane o konkretnym państwie wystarczy na niego kliknąć.
                                Kraje które na globie zostały oznaczone kolorem szarym są bardzo niebezpieczne i odradza się tam wszelkie podróże.
                                Kraje te dostały ocenę 10/10 czyli najwyższa według sztucznej inteligencji wiec należy wziąć na to poprawkę.
                                Aplikacja jest po angielsku aby ludzie z całego świata mogli z niej skorzystać.
                                W razie chęci poznania szczegółów jest link do strony Ministerstwa spraw zagranicznych.
                                <br/>
                                <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Drugi banner -->
    <section id="two" class="wrapper style3">

        <div class="inner">
            <div id="flexgrid">

                <div>
                    <header>
                        <h3>Kontakt</h3>
                    </header>
                    <p>Tutaj znajdziesz wszystkie informacje o twórcy - adres email, klase i szkołę</p>
                    <ul class="actions">
                        <li><a href="kontakt.php" class="button alt">Idź dalej</a></li>
                    </ul>
                </div>
                <div>
                    <header>
                        <h3>Aplikacja Safe World</h3>
                    </header>
                    <p>Klikając w poniższy guzik zostaniesz przekierowany na stronę z właściwą aplikacją</p>
                    <ul class="actions">
                        <li><a href="safeworld.html" class="button alt">Idź dalej</a></li>
                    </ul>
                </div>
                <div>
                    <header>
                        <h3>Strona konkursu</h3>
                    </header>
                    <p>strona przygotowana na konkurs Hack Heroes przez ucznia ZSTI w Gliwicach</p>
                    <ul class="actions">
                        <li><a href="http://www.hackheroes.pl" class="button alt">Do strony</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Trzeci banner -->
    <section id="three" class="wrapper style2">
        <div class="inner">
            <div class="align-center">

                <div>
                    <div class="box">
                        <div class="image fit">
                            <img src="images/bg.jpg" alt="" />
                        </div>
                        <div class="content">
                            <header class="align-center">
                                <h2>Bądź bezpieczny nawet przy złej pogodzie!</h2>
                                <p>Zapisz się już dziś do naszego systemu ostrzegania przed gwałtownymi zjawiskami pogodowymi.</p>
                                <p class="strong">Gwarantujemy ostrzeżenia drogą mailową. Pierwszy mail jeśli twój rejon jest w niebezpieczeństwie możesz już otrzymać tego samego dnia.</p>
                                <p> W razie potrzeby obecne ostrzeżenie możesz sprawdzić na stronie <a target="blank" href="https://www.meteoalarm.eu/">meteoalarm</a>. </p>
                            </header>
                            <hr/>
                            <form action="http://www.safeworld.y0.pl/addEmail.php" method="POST">
                                <label> Podaj swój mail <input name="email" type="email"></label>
                                <label> Wybierz Województwo
                                <select name="region">
                                    <option value="Lodzkie">Lodzkie</option>
                                    <option value="Dolnoslaskie">Dolnoslaskie</option>
                                    <option value="Kujawsko-pomorskie">Kujawsko-pomorskie</option>
                                    <option value="Lubelskie">Lubelskie</option>
                                    <option value="Lubuskie">Lubuskie</option>
                                    <option value="Malopolskie">Malopolskie</option>
                                    <option value="Mazowieckie">Mazowieckie</option>
                                    <option value="Opolskie">Opolskie</option>
                                    <option value="Podkarpackie">Podkarpackie</option>
                                    <option value="Podlaskie">Podlaskie</option>
                                    <option value="Pomorskie">Pomorskie</option>
                                    <option value="Slaskie">Slaskie</option>
                                    <option value="Swietokrzyskie">Swietokrzyskie</option>
                                    <option value="Warminsko-mazurskie">Warminsko-mazurskie</option>
                                    <option value="Wielkopolskie">Wielkopolskie</option>
                                    <option value="Zachodniopomorskie">Zachodniopomorskie</option>
                                </select>
                                </label>
                                <input type="submit">
                            </form>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </section>


    <section id="four" class="wrapper style3">
        <div class="inner">

            <footer class="align-center">
                <h2>Aplikacja Safe World</h2>
                <p>Ta aplikacja została stworzona na konkurs Hack Heroes przez Kamila Kowalczyka </p>
                <p>&copy; Kamil Kowalczyk</p>
            </footer>

        </div>
    </section>


    <!-- Skrypty -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.scrolly.min.js"></script>
    <script src="assets/js/jquery.scrollex.min.js"></script>
    <script src="assets/js/skel.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>
</body>
<?php

    error_reporting(0);
    $plik="liczbaOdwiedzin.txt";
    $file=fopen($plik, "r");
    flock($file, 1);
    $liczba=fgets($file, 16);
    flock($file, 3);
    fclose($file);

    $liczba++;

    $file=fopen($plik, "w");
    flock($file, 2);
    fwrite($file, $liczba++);
    flock($file, 3);
    fclose($file);
?>

</html>