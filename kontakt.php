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
            <li><a href="kontakt.html">Kontakt</a></li>
        </ul>
    </nav>



    <!-- Banner -->
    <section id="banner" data-video="images/703394665">
        <div class="inner">
            <h1>Safe World</h1>
            <a href="#main" class="button special scrolly">Kontakt</a>
        </div>
    </section>


    <!-- Footer -->
    <main id="main" class="wrapper">
        <div class="inner">
            <section>
                    <div class="box">
                        <div class="content">
                            <h2 class="align-center">Kamil Kowalczyk</h2>
                            <hr />
                            <p>szkoła:
                                <br />Zespołu Szkół Techniczno – Informatycznych w Gliwicach
                            </p>
                            <p>mail:
                                <br /><a href="mailto:kamil.kowalczyk.dev@gmail.com">kamil.kowalczyk.dev@gmail.com</a>
                            </p>
                            <p>numer telefonu:
                                <br /><a href="tel:+xxxxxxxxxxx">+xxxxxxxxxxx</a>
                            </p>
                            <br />
                            <p>Licznik Odwiedzin:</p>
                            <?php
                                error_reporting(0);
                                include 'liczbaOdwiedzin.txt';
                            ?>
                        </div>
                    </div>
            </section>


        </div>
    </main>
    <section id="four" class="wrapper style3">
        <div class="inner">

            <footer class="align-center">
                <h2>Aplikacja Safe World</h2>
                <p>Ta aplikacja została stworzona na konkurs Hack Heroes przez Kamila Kowalczyka </p>
                <p>&copy; Kamil Kowalczyk</p>
            </footer>

        </div>
    </section>
    <!-- Scripts -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.scrolly.min.js"></script>
    <script src="assets/js/jquery.scrollex.min.js"></script>
    <script src="assets/js/skel.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>


</body>

</html>