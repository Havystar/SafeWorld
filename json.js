// plik w formie js aby ułatwić komentowanie w orginale powinien być w formacie JSON

/* 
dane uzyskane z Wikipedii pod uwagę bierzemy aktywność działań wojennych,
bezpieczeństwo cywili oraz przede wszystkim liczbę ofiar w roku 2019 jak i 2018
oraz od początku trwania konfliktu w danym kraju
źródło: https://en.m.wikipedia.org/wiki/List_of_ongoing_armed_conflicts?fbclid=IwAR0izBGyP85JkbKja0-rkQPMSlvIi4WDUiFP8yUhpYpf-NGvktWOv3lW6j8
*/

const countriesByDeathsInWar = [
    ["ETHIOPIA", "MOZAMBIQUE", "IRAN", "PERU", "ANGOLA", "ARMENIA", "AZERBAIJAN", "PARAGUAY", "RUSSIAN FEDERATION", "LEBANON"], //1
    ["ISRAEL", "PHILIPPINES", "INDONESIA"], //2
    ["ALGERIA", "BURKINA FASO", "CENTRAL AFRICAN REPUBLIC", "UKRAINE", "INDONESIA"], //3
    ["INDIA", "THAILAND", "ECUADOR", "PALESTINE", "MAURITANIA", "MOROCCO", "TUNISIA", "CAMEROON"], //4
    ["PAKISTAN", "MYANMAR", "TURKEY", "DEMOCRATIC REPUBLIC OF THE CONGO"], //5
    ["COLOMBIA", "VENEZUELA", "EGYPT", "NIGER", "SUDAN", "LIBYA"], //6
    ["MALI"], //7
    ["SOMALIA", "NIGERIA", "KENYA", "IRAQ", "CHAD"], //8
    ["AFGHANISTAN", "MEXICO", "SYRIAN ARAB REPUBLIC", "YEMEN", "SAUDI ARABIA"] //9
];



/*
dane uzyskane z Wikipedi pod uwagę bierzemy liczbę incydentów według kraju w najnowszym roku jaki jest przedstawiony, oraz iczbę zgonów oraz rannych.

źródło: https://en.m.wikipedia.org/wiki/Number_of_terrorist_incidents_by_country

skrypt do pozyskania danych kompatybilnych z programem:

const start=52, end=150;
let countries="[";
for(let i=start; i<=end; i++){
var x = document.getElementsByTagName("TR")[i].childNodes[0].innerText;
x=x.trim();
countries+='"'+x.toUpperCase()+'", ';


}
countries+="]";
console.log(countries);


ostatecznie dane powinny docierać z API a podział powinien być poprzez instrukcję którę sprawdzaja wymienione wyżej parametry.
*/

const countriesByTerroristDanger = [
    ["CZECH REPUBLIC", "AZERBAIJAN", "JAMAICA", "KYRGYZSTAN", "ZAMBIA", "VIETNAM", "BRAZIL", "RWANDA", "MALDIVES", "TAJIKISTAN", "TAIWAN", "LAOS", "NETHERLANDS", "GEORGIA", "POLAND", "DJIBOUTI", "HONDURAS", "DOMINICAN REPUBLIC", "LATVIA", "ALBANIA", "LIBERIA", "MACEDONIA", "AUSTRIA", "NORWAY", "MALAWI"], //1
    ["TUNISIA", "MALAYSIA", "AUSTRALIA", "ZIMBABWE", "BELGIUM", "SIERRA LEONE", "FINLAND", "MALTA", "ECUADOR", "ARGENTINA"], //2
    ["JORDAN", "ITALY", "PAPUA NEW GUINEA", "PERU", "KOSOVO", "CHAD", "ANGOLA", "TANZANIA", "CHINA", "GABON"], //3
    ["INDONESIA", "GREECE", "LEBANON", "B AHRAIN", "BURUNDI", "MEXICO", "SWEDEN", "VENEZUELA", "IRELAND", "ALGERIA", "IVORY COAST", "UGANDA", "CHILE", "CANADA", "MOZAMBIQUE", "IRAN", "PARAGUAY"], //4
    ["FRANCE", "SRI LANKA", "BANGLADESH", "RUSSIA", "ISRAEL", "BURKINA FASO", "SOUTH AFRICA", "GERMANY", "ETHIOPIA"], //5
    ["WEST BANK AND GAZA STRIP", "SPAIN", "UNITED STATES OF AMERICA", "UKRAINE", "SAUDI ARABIA", "SOUTH SUDAN", "CENTRAL AFRICAN REPUBLIC", "NIGER"], //6
    ["THAILAND", "UNITED KINGDOM", "COLOMBIA", "SUDAN", "KENYA"], //7
    ["YEMEN", "PAKISTAN", "EGYPT", "LIBYA", "TURKEY", "MYANMAR", "DEMOCRATIC REPUBLIC OF THE CONGO", "MALI", "CAMEROON"], //8
    ["IRAQ", "AFGHANISTAN", "INDIA", "NIGERIA", "NEPAL", "SYRIAN ARAB REPUBLIC"] //9
];



/*
skrypt do pobrania nazw oraz adresów z MSZ strona najpierw została przetłumaczona gdyż posługuje się angielskimi nazwami krajów.

const start=1, end=document.getElementsByTagName("ul")[14].childNodes.length;
let countries="[";
for(let i=start; i<end-1; i+=2){
var x = document.getElementsByTagName("ul")[14].childNodes[i].childNodes[1].textContent;
x=x.trim();
countries+='"'+x.toUpperCase()+'", ';


}
countries+="]";
console.log(countries);

Źródło: https://www.gov.pl/web/dyplomacja/informacje-dla-podrozujacych
*/


const hrefToMSZ = [
    "https://www.gov.pl/web/dyplomacja/afganistan",

    "https://www.gov.pl/web/dyplomacja/albania",

    "https://www.gov.pl/web/dyplomacja/algieriainformacje",

    "https://www.gov.pl/web/dyplomacja/andora",

    "https://www.gov.pl/web/dyplomacja/angola",

    "https://www.gov.pl/web/dyplomacja/antigua-i-barbuda",

    "https://www.gov.pl/web/dyplomacja/arabia-saudyjska",

    "https://www.gov.pl/web/dyplomacja/argentyna",

    "https://www.gov.pl/web/dyplomacja/armenia",

    "https://www.gov.pl/web/dyplomacja/australia",

    "https://www.gov.pl/web/dyplomacja/austria",

    "https://www.gov.pl/web/dyplomacja/azerbejdzan",

    "https://www.gov.pl/web/dyplomacja/bahamy",

    "https://www.gov.pl/web/dyplomacja/bahrajn",

    "https://www.gov.pl/web/dyplomacja/bangladesz",

    "https://www.gov.pl/web/dyplomacja/barbados",

    "https://www.gov.pl/web/dyplomacja/belgia",

    "https://www.gov.pl/web/dyplomacja/belize",

    "https://www.gov.pl/web/dyplomacja/benin",

    "https://www.gov.pl/web/dyplomacja/bhutan",

    "https://www.gov.pl/web/dyplomacja/bialorus",

    "https://www.gov.pl/web/dyplomacja/boliwia",

    "https://www.gov.pl/web/dyplomacja/botswana",

    "https://www.gov.pl/web/dyplomacja/bosnia-i-hercegowina",

    "https://www.gov.pl/web/dyplomacja/brazylia",

    "https://www.gov.pl/web/dyplomacja/brunei-darussalam",

    "https://www.gov.pl/web/dyplomacja/burkina-faso",

    "https://www.gov.pl/web/dyplomacja/burundi",

    "https://www.gov.pl/web/dyplomacja/bulgaria",

    "https://www.gov.pl/web/dyplomacja/chile",

    "https://www.gov.pl/web/dyplomacja/chiny",

    "https://www.gov.pl/web/dyplomacja/chorwacja",

    "https://www.gov.pl/web/dyplomacja/cypr",

    "https://www.gov.pl/web/dyplomacja/czad",

    "https://www.gov.pl/web/dyplomacja/czarnogora",

    "https://www.gov.pl/web/dyplomacja/czechy",

    "https://www.gov.pl/web/dyplomacja/dania",

    "https://www.gov.pl/web/dyplomacja/demokratyczna-republika-konga",

    "https://www.gov.pl/web/dyplomacja/dominika",

    "https://www.gov.pl/web/dyplomacja/dominikana",

    "https://www.gov.pl/web/dyplomacja/dzibuti",

    "https://www.gov.pl/web/dyplomacja/egipt",

    "https://www.gov.pl/web/dyplomacja/ekwador",

    "https://www.gov.pl/web/dyplomacja/erytrea",

    "https://www.gov.pl/web/dyplomacja/estonia",

    "https://www.gov.pl/web/dyplomacja/eswatini",

    "https://www.gov.pl/web/dyplomacja/etiopia",

    "https://www.gov.pl/web/dyplomacja/fidzi",

    "https://www.gov.pl/web/dyplomacja/filipiny",

    "https://www.gov.pl/web/dyplomacja/finlandia",

    "https://www.gov.pl/web/dyplomacja/francja",

    "https://www.gov.pl/web/dyplomacja/gabon",

    "https://www.gov.pl/web/dyplomacja/gambia",

    "https://www.gov.pl/web/dyplomacja/ghana",

    "https://www.gov.pl/web/dyplomacja/grecja",

    "https://www.gov.pl/web/dyplomacja/grenada",

    "https://www.gov.pl/web/dyplomacja/gruzja",

    "https://www.gov.pl/web/dyplomacja/gujana",

    "https://www.gov.pl/web/dyplomacja/gwatemala",

    "https://www.gov.pl/web/dyplomacja/gwinea",

    "https://www.gov.pl/web/dyplomacja/gwinea-bissau",

    "https://www.gov.pl/web/dyplomacja/gwinea-rownikowa",

    "https://www.gov.pl/web/dyplomacja/haiti",

    "https://www.gov.pl/web/dyplomacja/hiszpania",

    "https://www.gov.pl/web/dyplomacja/holandia",

    "https://www.gov.pl/web/dyplomacja/honduras",

    "https://www.gov.pl/web/dyplomacja/hongkong",

    "https://www.gov.pl/web/dyplomacja/indie",

    "https://www.gov.pl/web/dyplomacja/indonezja",

    "https://www.gov.pl/web/dyplomacja/irak1",

    "https://www.gov.pl/web/dyplomacja/iran",

    "https://www.gov.pl/web/dyplomacja/irlandia",

    "https://www.gov.pl/web/dyplomacja/islandia",

    "https://www.gov.pl/web/dyplomacja/izrael-i-obszar-podlegly-palestynskiej-wladzy-narodowej-zachodni-brzeg-jordanu-i-strefa-gazy",

    "https://www.gov.pl/web/dyplomacja/jamajka",

    "https://www.gov.pl/web/dyplomacja/japonia",

    "https://www.gov.pl/web/dyplomacja/jemen",

    "https://www.gov.pl/web/dyplomacja/jordania",

    "https://www.gov.pl/web/dyplomacja/kambodza",

    "https://www.gov.pl/web/dyplomacja/kamerun",

    "https://www.gov.pl/web/dyplomacja/kanada",

    "https://www.gov.pl/web/dyplomacja/katar",

    "https://www.gov.pl/web/dyplomacja/kazachstan",

    "https://www.gov.pl/web/dyplomacja/kenia",

    "https://www.gov.pl/web/dyplomacja/kirgistan",

    "https://www.gov.pl/web/dyplomacja/kiribati",

    "https://www.gov.pl/web/dyplomacja/kolumbia",

    "https://www.gov.pl/web/dyplomacja/komory",

    "https://www.gov.pl/web/dyplomacja/kongo",

    "https://www.gov.pl/web/dyplomacja/korea-poludniowa",

    "https://www.gov.pl/web/dyplomacja/korea-polnocna",

    "https://www.gov.pl/web/dyplomacja/kosowo",

    "https://www.gov.pl/web/dyplomacja/kostaryka",

    "https://www.gov.pl/web/dyplomacja/kuba",

    "https://www.gov.pl/web/dyplomacja/kuwejt",

    "https://www.gov.pl/web/dyplomacja/laos",

    "https://www.gov.pl/web/dyplomacja/lesotho",

    "https://www.gov.pl/web/dyplomacja/liban",

    "https://www.gov.pl/web/dyplomacja/liberia",

    "https://www.gov.pl/web/dyplomacja/libia",

    "https://www.gov.pl/web/dyplomacja/liechtenstein",

    "https://www.gov.pl/web/dyplomacja/litwa",

    "https://www.gov.pl/web/dyplomacja/luksemburg",

    "https://www.gov.pl/web/dyplomacja/otwa",

    "https://www.gov.pl/web/dyplomacja/macedoniapolnocna",

    "https://www.gov.pl/web/dyplomacja/madagaskar",

    "https://www.gov.pl/web/dyplomacja/malawi",

    "https://www.gov.pl/web/dyplomacja/malediwy",

    "https://www.gov.pl/web/dyplomacja/malezja",

    "https://www.gov.pl/web/dyplomacja/mali",

    "https://www.gov.pl/web/dyplomacja/malta",

    "https://www.gov.pl/web/dyplomacja/maroko",

    "https://www.gov.pl/web/dyplomacja/mauretania",

    "https://www.gov.pl/web/dyplomacja/mauritius",

    "https://www.gov.pl/web/dyplomacja/meksyk",

    "https://www.gov.pl/web/dyplomacja/mikronezja",

    "https://www.gov.pl/web/dyplomacja/mjanma",

    "https://www.gov.pl/web/dyplomacja/monako",

    "https://www.gov.pl/web/dyplomacja/mongolia",

    "https://www.gov.pl/web/dyplomacja/mozambik",

    "https://www.gov.pl/web/dyplomacja/moldawia",

    "https://www.gov.pl/web/dyplomacja/namibia",

    "https://www.gov.pl/web/dyplomacja/nauru",

    "https://www.gov.pl/web/dyplomacja/nepal",

    "https://www.gov.pl/web/dyplomacja/niemcy",

    "https://www.gov.pl/web/dyplomacja/niger",

    "https://www.gov.pl/web/dyplomacja/nigeria",

    "https://www.gov.pl/web/dyplomacja/nikaragua",

    "https://www.gov.pl/web/dyplomacja/norwegia",

    "https://www.gov.pl/web/dyplomacja/nowa-zelandia",

    "https://www.gov.pl/web/dyplomacja/oman",

    "https://www.gov.pl/web/dyplomacja/pakistan",

    "https://www.gov.pl/web/dyplomacja/palau",

    "https://www.gov.pl/web/dyplomacja/papua-nowa-gwinea",

    "https://www.gov.pl/web/dyplomacja/panama",

    "https://www.gov.pl/web/dyplomacja/paragwaj",

    "https://www.gov.pl/web/dyplomacja/peru",

    "https://www.gov.pl/web/dyplomacja/portugalia",

    "https://www.gov.pl/web/dyplomacja/republika-poludniowej-afryki",

    "https://www.gov.pl/web/dyplomacja/republika-zielonego-przyladka",

    "https://www.gov.pl/web/dyplomacja/republika-rodkowoafrykanska",

    "https://www.gov.pl/web/dyplomacja/rosja",

    "https://www.gov.pl/web/dyplomacja/rumunia",

    "https://www.gov.pl/web/dyplomacja/rwanda",

    "https://www.gov.pl/web/dyplomacja/saint-lucia",

    "https://www.gov.pl/web/dyplomacja/saint-vincent-i-grenadyny",

    "https://www.gov.pl/web/dyplomacja/salwador",

    "https://www.gov.pl/web/dyplomacja/samoa",

    "https://www.gov.pl/web/dyplomacja/san-marino",

    "https://www.gov.pl/web/dyplomacja/senegal",

    "https://www.gov.pl/web/dyplomacja/serbia",

    "https://www.gov.pl/web/dyplomacja/seszele",

    "https://www.gov.pl/web/dyplomacja/sierra-leone",

    "https://www.gov.pl/web/dyplomacja/singapur",

    "https://www.gov.pl/web/dyplomacja/slowacja",

    "https://www.gov.pl/web/dyplomacja/slowenia",

    "https://www.gov.pl/web/dyplomacja/somalia",

    "https://www.gov.pl/web/dyplomacja/sri-lanka",

    "https://www.gov.pl/web/dyplomacja/st-kitts-nevis",

    "https://www.gov.pl/web/dyplomacja/stany-zjednoczone-ameryki",

    "https://www.gov.pl/web/dyplomacja/sudan",

    "https://www.gov.pl/web/dyplomacja/sudan-poludniowy",

    "https://www.gov.pl/web/dyplomacja/surinam",

    "https://www.gov.pl/web/dyplomacja/syria",

    "https://www.gov.pl/web/dyplomacja/szwajcaria",

    "https://www.gov.pl/web/dyplomacja/szwecja",

    "https://www.gov.pl/web/dyplomacja/tadzykistan",

    "https://www.gov.pl/web/dyplomacja/tajlandia",

    "https://www.gov.pl/web/dyplomacja/tanzania",

    "https://www.gov.pl/web/dyplomacja/timor-wschodni",

    "https://www.gov.pl/web/dyplomacja/togo",

    "https://www.gov.pl/web/dyplomacja/tonga",

    "https://www.gov.pl/web/dyplomacja/trynidad-i-tobago",

    "https://www.gov.pl/web/dyplomacja/tunezja",

    "https://www.gov.pl/web/dyplomacja/turcja",

    "https://www.gov.pl/web/dyplomacja/turkmenistan",

    "https://www.gov.pl/web/dyplomacja/tuvalu",

    "https://www.gov.pl/web/dyplomacja/uganda",

    "https://www.gov.pl/web/dyplomacja/ukraina",

    "https://www.gov.pl/web/dyplomacja/urugwaj",

    "https://www.gov.pl/web/dyplomacja/uzbekistan",

    "https://www.gov.pl/web/dyplomacja/vanuatu",

    "https://www.gov.pl/web/dyplomacja/watykan",

    "https://www.gov.pl/web/dyplomacja/wenezuela",

    "https://www.gov.pl/web/dyplomacja/wielka-brytania",

    "https://www.gov.pl/web/dyplomacja/wietnam",

    "https://www.gov.pl/web/dyplomacja/wybrzeze-kosci-sloniowej",

    "https://www.gov.pl/web/dyplomacja/wyspy-marshalla",

    "https://www.gov.pl/web/dyplomacja/wyspy-salomona",

    "https://www.gov.pl/web/dyplomacja/wyspy-wietego-tomasza-i-ksiazeca",
    
    "https://www.gov.pl/web/dyplomacja/wegry",

    "https://www.gov.pl/web/dyplomacja/wlochy",

    "https://www.gov.pl/web/dyplomacja/zambia",

    "https://www.gov.pl/web/dyplomacja/zimbabwe",

    "https://www.gov.pl/web/dyplomacja/zjednoczone-emiraty-arabskie"
];

const countryNamesFromMSZ = [
    "AFGHANISTAN", "ALBANIA", "ALGERIA", "ANDORRA", "ANGOLA",

    "ANTIGUA AND BARBUDA", "SAUDI ARABIA", "ARGENTINA", "ARMENIA", "AUSTRALIA", "AUSTRIA",

    "AZERBAIJAN", "BAHAMAS", "BAHRAIN", "BANGLADESH", "BARBADOS", "BELGIUM",

    "BELIZE", "BENIN", "BHUTAN", "BELARUS", "BOLIVIA", "BOTSWANA",

    "BOSNIA AND HERZEGOVINA", "BRAZIL", "BRUNEI DARUSSALAM", "BURKINA FASO", "BURUNDI",

    "BULGARIA", "CHILE", "CHINA", "CROATIA", "CYPRUS", "CHAD", "MONTENEGRO",

    "CZECH REPUBLIC", "DENMARK", "DEMOCRATIC REPUBLIC OF THE CONGO", "DOMINICA",

    "DOMINICAN REPUBLIC", "DJIBOUTI", "EGYPT", "ECUADOR", "ERITREA", "ESTONIA",

    "ESWATINI", "ETHIOPIA", "FIJI", "PHILIPPINES", "FINLAND", "FRANCE", "GABON",

    "GAMBIA", "GHANA", "GREECE", "GRENADA", "GEORGIA", "GUIANA", "GUATEMALA",

    "GUINEA", "GUINEA BISSAU", "EQUATORIAL GUINEA", "HAITI", "SPAIN", "NETHERLANDS",

    "HONDURAS", "HONG KONG", "INDIA", "INDONESIA", "IRAQ", "IRAN", "IRELAND",

    "ICELAND", "ISRAEL", "JAMAICA", "JAPAN", "YEMEN", "JORDAN", "CAMBODIA",

    "CAMEROON", "CANADA", "QATAR", "KAZAKHSTAN", "KENYA", "KYRGYZSTAN",

    "KIRIBATI", "COLOMBIA", "COMOROS", "KONGO", "SOUTH KOREA", "NORTH KOREA",

    "KOSOVO", "COSTA RICA", "CUBA", "KUWAIT", "LAOS", "LESOTHO", "LEBANON",

    "LIBERIA", "LIBYA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "LATVIA",

    "MACEDONIA", "MADAGASCAR", "MALAWI", "MALDIVES", "MALAYSIA", "MALI",

    "MALTA", "MOROCCO", "MAURETANIA", "MAURITANIA", "MEXICO", "MICRONESIA",

    "MYANMAR", "MONACO", "MONGOLIA", "MOZAMBIQUE", "MOLDOVA", "NAMIBIA", "NAURU",

    "NEPAL", "GERMANY", "NIGER", "NIGERIA", "NICARAGUA", "NORWAY", "NEW ZEALAND",

    "OMAN", "PAKISTAN", "PALAU", "PAPUA NEW GUINEA", "PANAMA", "PARAGUAY", "PERU",

    "PORTUGAL", "SOUTH AFRICA", "CAPE VERDE", "CENTRAL AFRICAN REPUBLIC", "RUSSIAN FEDERATION",

    "ROMANIA", "RWANDA", "SAINT LUCIA", "SAINT VINCENT AND THE GRENADINES",

    "EL SALVADOR", "SAMOA", "SAN MARINO", "SENEGAL", "SERBIA", "SEYCHELLES",

    "SIERRA LEONE", "SINGAPORE", "SLOVAKIA", "SLOVENIA", "SOMALIA", "SRI LANKA",

    "ST. KITTS & NEVIS", "UNITED STATES OF AMERICA", "SUDAN", "SOUTH SUDAN", "SURINAME",

    "SYRIAN ARAB REPUBLIC", "SWITZERLAND", "SWEDEN", "TAJIKISTAN", "THAILAND", "TANZANIA", "EAST TIMOR",

    "TOGO", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY",

    "TURKMENISTAN", "TUVALU", "UGANDA", "UKRAINE", "URUGUAY", "UZBEKISTAN",

    "VANUATU", "VATICAN", "VENEZUELA", "UNITED KINGDOM", "VIETNAM", "IVORY COAST",

    "MARSHALL ISLANDS", "SOLOMON ISLANDS", "SAO TOME AND PRINCIPE", "HUNGARY",

    "ITALY", "ZAMBIA", "ZIMBABWE", "UNITED ARAB EMIRATES"
];

//dane krajów z biblioteki

const basicCountryData = {

    AD: { colorCode: 186, name: 'ANDORRA', lat: 42.5, lon: 1.6 ,  ai: 0 },
    AE: { colorCode: 22, name: 'UNITED ARAB EMIRATES', lat: 24, lon: 54 ,  ai: 0 },
    AF: { colorCode: 30, name: 'AFGHANISTAN', lat: 33, lon: 65 ,  ai: 0 },
    AG: { colorCode: 190, name: 'ANTIGUA AND BARBUDA', lat: 17.05, lon: -61.8 ,  ai: 0 },
    AI: { colorCode: 215, name: 'ANGUILLA', lat: 18.25, lon: -63.1667 ,  ai: 0 },
    AL: { colorCode: 69, name: 'ALBANIA', lat: 41, lon: 20 ,  ai: 0 },
    AM: { colorCode: 115, name: 'ARMENIA', lat: 40, lon: 45 ,  ai: 0 },
    AO: { colorCode: 47, name: 'ANGOLA', lat: -12.5, lon: 18.5 ,  ai: 0 },
    AQ: { colorCode: 152, name: 'ANTARCTICA', lat: -90, lon: 0 ,  ai: 0 },
    AR: { colorCode: 76, name: 'ARGENTINA', lat: -34, lon: -64 ,  ai: 0 },
    AS: { colorCode: 208, name: 'AMERICAN SAMOA', lat: -14.3333, lon: -170 ,  ai: 0 },
    AT: { colorCode: 35, name: 'AUSTRIA', lat: 47.3333, lon: 13.3333 ,  ai: 0 },
    AU: { colorCode: 51, name: 'AUSTRALIA', lat: -27, lon: 133 ,  ai: 0 },
    AW: { colorCode: 210, name: 'ARUBA', lat: 12.5, lon: -69.9667 ,  ai: 0 },
    AZ: { colorCode: 106, name: 'AZERBAIJAN', lat: 40.5, lon: 47.5 ,  ai: 0 },
    BA: { colorCode: 94, name: 'BOSNIA AND HERZEGOVINA', lat: 44, lon: 18 ,  ai: 0 },
    BB: { colorCode: 191, name: 'BARBADOS', lat: 13.1667, lon: -59.5333 ,  ai: 0 },
    BD: { colorCode: 31, name: 'BANGLADESH', lat: 24, lon: 90 ,  ai: 0 },
    BE: { colorCode: 100, name: 'BELGIUM', lat: 50.8333, lon: 4 ,  ai: 0 },
    BF: { colorCode: 2, name: 'BURKINA FASO', lat: 13, lon: -2 ,  ai: 0 },
    BG: { colorCode: 103, name: 'BULGARIA', lat: 43, lon: 25 ,  ai: 0 },
    BH: { colorCode: 185, name: 'BAHRAIN', lat: 26, lon: 50.55 ,  ai: 0 },
    BI: { colorCode: 104, name: 'BURUNDI', lat: -3.5, lon: 30 ,  ai: 0 },
    BJ: { colorCode: 143, name: 'BENIN', lat: 9.5, lon: 2.25 ,  ai: 0 },
    BL: { colorCode: 203, name: 'SAINT BARTHÉLEMY' ,  ai: 0 },
    BM: { colorCode: 219, name: 'BERMUDA', lat: 32.3333, lon: -64.75 ,  ai: 0 },
    BN: { colorCode: 170, name: 'BRUNEI DARUSSALAM', lat: 4.5, lon: 114.6667 ,  ai: 0 },
    BO: { colorCode: 10, name: 'BOLIVIA', lat: -17, lon: -65 ,  ai: 0 },
    BR: { colorCode: 24, name: 'BRAZIL', lat: -10, lon: -55 ,  ai: 0 },
    BS: { colorCode: 161, name: 'BAHAMAS', lat: 24.25, lon: -76 ,  ai: 0 },
    BT: { colorCode: 156, name: 'BHUTAN', lat: 27.5, lon: 90.5 ,  ai: 0 },
    BW: { colorCode: 16, name: 'BOTSWANA', lat: -22, lon: 24 ,  ai: 0 },
    BY: { colorCode: 5, name: 'BELARUS', lat: 53, lon: 28 ,  ai: 0 },
    BZ: { colorCode: 23, name: 'BELIZE', lat: 17.25, lon: -88.75 ,  ai: 0 },
    CA: { colorCode: 97, name: 'CANADA', lat: 60, lon: -95 ,  ai: 0 },
    CD: { colorCode: 27, name: 'DEMOCRATIC REPUBLIC OF THE CONGO', lat: 0, lon: 25 ,  ai: 0 },
    CF: { colorCode: 132, name: 'CENTRAL AFRICAN REPUBLIC', lat: 7, lon: 21 ,  ai: 0 },
    CG: { colorCode: 110, name: 'CONGO', lat: -1, lon: 15 ,  ai: 0 },
    CH: { colorCode: 13, name: 'SWITZERLAND', lat: 47, lon: 8 ,  ai: 0 },
    CI: { colorCode: 11, name: 'CÔTE D\'IVOIRE', lat: 8, lon: -5 ,  ai: 0 },
    CK: { colorCode: 206, name: 'COOK ISLANDS', lat: -21.2333, lon: -159.7667 ,  ai: 0 },
    CL: { colorCode: 128, name: 'CHILE', lat: -30, lon: -71 ,  ai: 0 },
    CM: { colorCode: 14, name: 'CAMEROON', lat: 6, lon: 12 ,  ai: 0 },
    CN: { colorCode: 96, name: 'CHINA', lat: 35, lon: 105 ,  ai: 0 },
    CO: { colorCode: 45, name: 'COLOMBIA', lat: 4, lon: -72 ,  ai: 0 },
    CR: { colorCode: 78, name: 'COSTA RICA', lat: 10, lon: -84 ,  ai: 0 },
    CU: { colorCode: 42, name: 'CUBA', lat: 21.5, lon: -80 ,  ai: 0 },
    CV: { colorCode: 172, name: 'CAPE VERDE', lat: 16, lon: -24 ,  ai: 0 },
    CY: { colorCode: 167, name: 'CYPRUS', lat: 35, lon: 33 ,  ai: 0 },
    CZ: { colorCode: 67, name: 'CZECH REPUBLIC', lat: 49.75, lon: 15.5 ,  ai: 0 },
    DE: { colorCode: 48, name: 'GERMANY', lat: 51, lon: 9 ,  ai: 0 },
    DJ: { colorCode: 105, name: 'DJIBOUTI', lat: 11.5, lon: 43 ,  ai: 0 },
    DK: { colorCode: 57, name: 'DENMARK', lat: 56, lon: 10 ,  ai: 0 },
    DM: { colorCode: 181, name: 'DOMINICA', lat: 15.4167, lon: -61.3333 ,  ai: 0 },
    DO: { colorCode: 32, name: 'DOMINICAN REPUBLIC', lat: 19, lon: -70.6667 ,  ai: 0 },
    DZ: { colorCode: 12, name: 'ALGERIA', lat: 28, lon: 3 ,  ai: 0 },
    EC: { colorCode: 142, name: 'ECUADOR', lat: -2, lon: -77.5 ,  ai: 0 },
    EE: { colorCode: 113, name: 'ESTONIA', lat: 59, lon: 26 ,  ai: 0 },
    EG: { colorCode: 87, name: 'EGYPT', lat: 27, lon: 30 ,  ai: 0 },
    EH: { colorCode: 66, name: 'WESTERN SAHARA', lat: 24.5, lon: -13 ,  ai: 0 },
    ER: { colorCode: 149, name: 'ERITREA', lat: 15, lon: 39 ,  ai: 0 },
    ES: { colorCode: 118, name: 'SPAIN', lat: 40, lon: -4 ,  ai: 0 },
    ET: { colorCode: 63, name: 'ETHIOPIA', lat: 8, lon: 38 ,  ai: 0 },
    FI: { colorCode: 70, name: 'FINLAND', lat: 64, lon: 26 ,  ai: 0 },
    FJ: { colorCode: 158, name: 'FIJI', lat: -18, lon: 175 ,  ai: 0 },
    FK: { colorCode: 163, name: 'FALKLAND ISLANDS (MALVINAS)', lat: -51.75, lon: -59 ,  ai: 0 },
    FM: { colorCode: 184, name: 'MICRONESIA', lat: 6.9167, lon: 158.25 ,  ai: 0 },
    FO: { colorCode: 178, name: 'FAROE ISLANDS', lat: 62, lon: -7 ,  ai: 0 },
    FR: { colorCode: 3, name: 'FRANCE', lat: 46, lon: 2 ,  ai: 0 },
    GA: { colorCode: 119, name: 'GABON', lat: -1, lon: 11.75 ,  ai: 0 },
    GB: { colorCode: 77, name: 'UNITED KINGDOM', lat: 54, lon: -2 ,  ai: 0 },
    GD: { colorCode: 197, name: 'GRENADA', lat: 12.1167, lon: -61.6667 ,  ai: 0 },
    GE: { colorCode: 89, name: 'GEORGIA', lat: 42, lon: 43.5 ,  ai: 0 },
    GG: { colorCode: 217, name: 'GUERNSEY', lat: 49.5, lon: -2.56 ,  ai: 0 },
    GH: { colorCode: 34, name: 'GHANA', lat: 8, lon: -2 ,  ai: 0 },
    GI: { colorCode: 222, name: 'GIBRALTAR', lat: 36.1833, lon: -5.3667 ,  ai: 0 },
    GL: { colorCode: 55, name: 'GREENLAND', lat: 72, lon: -40 ,  ai: 0 },
    GM: { colorCode: 164, name: 'GAMBIA', lat: 13.4667, lon: -16.5667 ,  ai: 0 },
    GN: { colorCode: 80, name: 'GUINEA', lat: 11, lon: -10 ,  ai: 0 },
    GP: { colorCode: 3, name: 'FRANCE', lat: 46, lon: 2 ,  ai: 0 },
    GQ: { colorCode: 101, name: 'EQUATORIAL GUINEA', lat: 2, lon: 10 ,  ai: 0 },
    GR: { colorCode: 140, name: 'GREECE', lat: 39, lon: 22 ,  ai: 0 },
    GT: { colorCode: 64, name: 'GUATEMALA', lat: 15.5, lon: -90.25 ,  ai: 0 },
    GU: { colorCode: 227, name: 'GUAM', lat: 13.4667, lon: 144.7833 ,  ai: 0 },
    GW: { colorCode: 33, name: 'GUINEA-BISSAU', lat: 12, lon: -15 ,  ai: 0 },
    GY: { colorCode: 99, name: 'GUYANA', lat: 5, lon: -59 ,  ai: 0 },
    HK: { colorCode: 96, name: 'CHINA', lat: 35, lon: 105 ,  ai: 0 },
    HN: { colorCode: 125, name: 'HONDURAS', lat: 15, lon: -86.5 ,  ai: 0 },
    HR: { colorCode: 54, name: 'CROATIA', lat: 45.1667, lon: 15.5 ,  ai: 0 },
    HT: { colorCode: 93, name: 'HAITI', lat: 19, lon: -72.4167 ,  ai: 0 },
    HU: { colorCode: 120, name: 'HUNGARY', lat: 47, lon: 20 ,  ai: 0 },
    ID: { colorCode: 7, name: 'INDONESIA', lat: -5, lon: 120 ,  ai: 0 },
    IE: { colorCode: 81, name: 'IRELAND', lat: 53, lon: -8 ,  ai: 0 },
    IL: { colorCode: 137, name: 'ISRAEL', lat: 31.5, lon: 34.75 ,  ai: 0 },
    IM: { colorCode: 226, name: 'ISLE OF MAN', lat: 54.23, lon: -4.55 ,  ai: 0 },
    IN: { colorCode: 95, name: 'INDIA', lat: 20, lon: 77 ,  ai: 0 },
    IQ: { colorCode: 53, name: 'IRAQ', lat: 33, lon: 44 ,  ai: 0 },
    IR: { colorCode: 61, name: 'IRAN', lat: 32, lon: 53 ,  ai: 0 },
    IS: { colorCode: 126, name: 'ICELAND', lat: 65, lon: -18 ,  ai: 0 },
    IT: { colorCode: 28, name: 'ITALY', lat: 42.8333, lon: 12.8333 ,  ai: 0 },
    JE: { colorCode: 214, name: 'JERSEY', lat: 49.21, lon: -2.13 ,  ai: 0 },
    JM: { colorCode: 166, name: 'JAMAICA', lat: 18.25, lon: -77.5 ,  ai: 0 },
    JO: { colorCode: 20, name: 'JORDAN', lat: 31, lon: 36 ,  ai: 0 },
    JP: { colorCode: 40, name: 'JAPAN', lat: 36, lon: 138 ,  ai: 0 },
    KE: { colorCode: 18, name: 'KENYA', lat: 1, lon: 38 ,  ai: 0 },
    KG: { colorCode: 72, name: 'KYRGYZSTAN', lat: 41, lon: 75 ,  ai: 0 },
    KH: { colorCode: 123, name: 'CAMBODIA', lat: 13, lon: 105 ,  ai: 0 },
    KI: { colorCode: 183, name: 'KIRIBATI', lat: 1.4167, lon: 173 ,  ai: 0 },
    KM: { colorCode: 176, name: 'COMOROS', lat: -12.1667, lon: 44.25 ,  ai: 0 },
    KN: { colorCode: 201, name: 'SAINT KITTS AND NEVIS', lat: 17.3333, lon: -62.75 ,  ai: 0 },
    KP: { colorCode: 139, name: 'SOUTH KOREA', lat: 40, lon: 127 ,  ai: 0 },
    KR: { colorCode: 124, name: 'NORTH KOREA', lat: 37, lon: 127.5 ,  ai: 0 },
    KW: { colorCode: 159, name: 'KUWAIT', lat: 29.3375, lon: 47.6581 ,  ai: 0 },
    KY: { colorCode: 200, name: 'CAYMAN ISLANDS', lat: 19.5, lon: -80.5 ,  ai: 0 },
    KZ: { colorCode: 151, name: 'KAZAKHSTAN', lat: 48, lon: 68 ,  ai: 0 },
    LA: { colorCode: 138, name: 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC', lat: 18, lon: 105 ,  ai: 0 },
    LB: { colorCode: 147, name: 'LEBANON', lat: 33.8333, lon: 35.8333 ,  ai: 0 },
    LC: { colorCode: 194, name: 'SAINT LUCIA', lat: 13.8833, lon: -61.1333 ,  ai: 0 },
    LI: { colorCode: 211, name: 'LIECHTENSTEIN', lat: 47.1667, lon: 9.5333 ,  ai: 0 },
    LK: { colorCode: 136, name: 'SRI LANKA', lat: 7, lon: 81 ,  ai: 0 },
    LR: { colorCode: 130, name: 'LIBERIA', lat: 6.5, lon: -9.5 ,  ai: 0 },
    LS: { colorCode: 102, name: 'LESOTHO', lat: -29.5, lon: 28.5 ,  ai: 0 },
    LT: { colorCode: 134, name: 'LITHUANIA', lat: 56, lon: 24 ,  ai: 0 },
    LU: { colorCode: 175, name: 'LUXEMBOURG', lat: 49.75, lon: 6.1667 ,  ai: 0 },
    LV: { colorCode: 58, name: 'LATVIA', lat: 57, lon: 25 ,  ai: 0 },
    LY: { colorCode: 4, name: 'LIBYA', lat: 25, lon: 17 ,  ai: 0 },
    MA: { colorCode: 129, name: 'MOROCCO', lat: 32, lon: -5 ,  ai: 0 },
    MC: { colorCode: 224, name: 'MONACO', lat: 43.7333, lon: 7.4 ,  ai: 0 },
    MD: { colorCode: 146, name: 'MOLDOVA', lat: 47, lon: 29 ,  ai: 0 },
    ME: { colorCode: 112, name: 'MONTENEGRO', lat: 42, lon: 19 ,  ai: 0 },
    MG: { colorCode: 9, name: 'MADAGASCAR', lat: -20, lon: 47 ,  ai: 0 },
    MH: { colorCode: 209, name: 'MARSHALL ISLANDS', lat: 9, lon: 168 ,  ai: 0 },
    MK: { colorCode: 15, name: 'MACEDONIA', lat: 41.8333, lon: 22 ,  ai: 0 },
    ML: { colorCode: 26, name: 'MALI', lat: 17, lon: -4 ,  ai: 0 },
    MM: { colorCode: 62, name: 'MYANMAR', lat: 22, lon: 98 ,  ai: 0 },
    MN: { colorCode: 155, name: 'MONGOLIA', lat: 46, lon: 105 ,  ai: 0 },
    MP: { colorCode: 187, name: 'NORTHERN MARIANA ISLANDS', lat: 15.2, lon: 145.75 ,  ai: 0 },
    MR: { colorCode: 46, name: 'MAURITANIA', lat: 20, lon: -12 ,  ai: 0 },
    MS: { colorCode: 202, name: 'MONTSERRAT', lat: 16.75, lon: -62.2 ,  ai: 0 },
    MT: { colorCode: 198, name: 'MALTA', lat: 35.8333, lon: 14.5833 ,  ai: 0 },
    MU: { colorCode: 177, name: 'MAURITIUS', lat: -20.2833, lon: 57.55 ,  ai: 0 },
    MV: { colorCode: 199, name: 'MALDIVES', lat: 3.25, lon: 73 ,  ai: 0 },
    MW: { colorCode: 121, name: 'MALAWI', lat: -13.5, lon: 34 ,  ai: 0 },
    MX: { colorCode: 21, name: 'MEXICO', lat: 23, lon: -102 ,  ai: 0 },
    MY: { colorCode: 107, name: 'MALAYSIA', lat: 2.5, lon: 112.5 ,  ai: 0 },
    MZ: { colorCode: 39, name: 'MOZAMBIQUE', lat: -18.25, lon: 35 ,  ai: 0 },
    NA: { colorCode: 85, name: 'NAMIBIA', lat: -22, lon: 17 ,  ai: 0 },
    NC: { colorCode: 157, name: 'NEW CALEDONIA', lat: -21.5, lon: 165.5 ,  ai: 0 },
    NE: { colorCode: 56, name: 'NIGER', lat: 16, lon: 8 ,  ai: 0 },
    NG: { colorCode: 82, name: 'NIGERIA', lat: 10, lon: 8 ,  ai: 0 },
    NI: { colorCode: 127, name: 'NICARAGUA', lat: 13, lon: -85 ,  ai: 0 },
    NL: { colorCode: 131, name: 'NETHERLANDS', lat: 52.5, lon: 5.75 ,  ai: 0 },
    NO: { colorCode: 145, name: 'NORWAY', lat: 62, lon: 10 ,  ai: 0 },
    NP: { colorCode: 148, name: 'NEPAL', lat: 28, lon: 84 ,  ai: 0 },
    NR: { colorCode: 221, name: 'NAURU', lat: -0.5333, lon: 166.9167 ,  ai: 0 },
    NU: { colorCode: 204, name: 'NIUE', lat: -19.0333, lon: -169.8667 ,  ai: 0 },
    NZ: { colorCode: 41, name: 'NEW ZEALAND', lat: -41, lon: 174 ,  ai: 0 },
    OM: { colorCode: 74, name: 'OMAN', lat: 21, lon: 57 ,  ai: 0 },
    PA: { colorCode: 75, name: 'PANAMA', lat: 9, lon: -80 ,  ai: 0 },
    PE: { colorCode: 1, name: 'PERU', lat: -10, lon: -76 ,  ai: 0 },
    PF: { colorCode: 173, name: 'FRENCH POLYNESIA', lat: -15, lon: -140 ,  ai: 0 },
    PG: { colorCode: 52, name: 'PAPUA NEW GUINEA', lat: -6, lon: 147 ,  ai: 0 },
    PH: { colorCode: 108, name: 'PHILIPPINES', lat: 13, lon: 122 ,  ai: 0 },
    PK: { colorCode: 6, name: 'PAKISTAN', lat: 30, lon: 70 ,  ai: 0 },
    PL: { colorCode: 84, name: 'POLAND', lat: 52, lon: 20 ,  ai: 0 },
    PM: { colorCode: 205, name: 'SAINT PIERRE AND MIQUELON', lat: 46.8333, lon: -56.3333 ,  ai: 0 },
    PN: { colorCode: 223, name: 'PITCAIRN', lat: -24.7, lon: -127.4 ,  ai: 0 },
    PR: { colorCode: 168, name: 'PUERTO RICO', lat: 18.25, lon: -66.5 ,  ai: 0 },
    PS: { colorCode: 169, name: 'PALESTINE', lat: 32, lon: 35.25 ,  ai: 0 },
    PT: { colorCode: 44, name: 'PORTUGAL', lat: 39.5, lon: -8 ,  ai: 0 },
    PW: { colorCode: 188, name: 'PALAU', lat: 7.5, lon: 134.5 ,  ai: 0 },
    PY: { colorCode: 79, name: 'PARAGUAY', lat: -23, lon: -58 ,  ai: 0 },
    QA: { colorCode: 165, name: 'QATAR', lat: 25.5, lon: 51.25 ,  ai: 0 },
    RE: { colorCode: 3, name: 'FRANCE', lat: 46, lon: 2 ,  ai: 0 },
    RO: { colorCode: 59, name: 'ROMANIA', lat: 46, lon: 25 ,  ai: 0 },
    RS: { colorCode: 111, name: 'SERBIA', lat: 44, lon: 21 ,  ai: 0 },
    RU: { colorCode: 92, name: 'RUSSIAN FEDERATION', lat: 60, lon: 100 ,  ai: 0 },
    RW: { colorCode: 114, name: 'RWANDA', lat: -2, lon: 30 ,  ai: 0 },
    SA: { colorCode: 90, name: 'SAUDI ARABIA', lat: 25, lon: 45 ,  ai: 0 },
    SB: { colorCode: 73, name: 'SOLOMON ISLANDS', lat: -8, lon: 159 ,  ai: 0 },
    SC: { colorCode: 189, name: 'SEYCHELLES', lat: -4.5833, lon: 55.6667 ,  ai: 0 },
    SD: { colorCode: 49, name: 'SUDAN', lat: 15, lon: 30 ,  ai: 0 },
    SE: { colorCode: 36, name: 'SWEDEN', lat: 62, lon: 15 ,  ai: 0 },
    SG: { colorCode: 228, name: 'SINGAPORE', lat: 1.3667, lon: 103.8 ,  ai: 0 },
    SH: { colorCode: 213, name: 'SAINT HELENA', lat: -15.9333, lon: -5.7 ,  ai: 0 },
    SI: { colorCode: 144, name: 'SLOVENIA', lat: 46, lon: 15 ,  ai: 0 },
    SK: { colorCode: 133, name: 'SLOVAKIA', lat: 48.6667, lon: 19.5 ,  ai: 0 },
    SL: { colorCode: 25, name: 'SIERRA LEONE', lat: 8.5, lon: -11.5 ,  ai: 0 },
    SM: { colorCode: 218, name: 'SAN MARINO', lat: 43.7667, lon: 12.4167 ,  ai: 0 },
    SN: { colorCode: 116, name: 'SENEGAL', lat: 14, lon: -14 ,  ai: 0 },
    SO: { colorCode: 29, name: 'SOMALIA', lat: 10, lon: 49 ,  ai: 0 },
    SR: { colorCode: 65, name: 'SURINAME', lat: 4, lon: -56 ,  ai: 0 },
    ST: { colorCode: 179, name: 'SAO TOME AND PRINCIPE', lat: 1, lon: 7 ,  ai: 0 },
    SV: { colorCode: 98, name: 'EL SALVADOR', lat: 13.8333, lon: -88.9167 ,  ai: 0 },
    SY: { colorCode: 71, name: 'SYRIAN ARAB REPUBLIC', lat: 35, lon: 38 ,  ai: 0 },
    SZ: { colorCode: 153, name: 'SWAZILAND', lat: -26.5, lon: 31.5 ,  ai: 0 },
    TC: { colorCode: 192, name: 'TURKS AND CAICOS ISLANDS', lat: 21.75, lon: -71.5833 ,  ai: 0 },
    TD: { colorCode: 68, name: 'CHAD', lat: 15, lon: 19 ,  ai: 0 },
    TG: { colorCode: 117, name: 'TOGO', lat: 8, lon: 1.1667 ,  ai: 0 },
    TH: { colorCode: 50, name: 'THAILAND', lat: 15, lon: 100 ,  ai: 0 },
    TJ: { colorCode: 122, name: 'TAJIKISTAN', lat: 39, lon: 71 ,  ai: 0 },
    TL: { colorCode: 160, name: 'TIMOR-LESTE', lat: -8.55, lon: 125.5167 ,  ai: 0 },
    TM: { colorCode: 141, name: 'TURKMENISTAN', lat: 40, lon: 60 ,  ai: 0 },
    TN: { colorCode: 83, name: 'TUNISIA', lat: 34, lon: 9 ,  ai: 0 },
    TO: { colorCode: 182, name: 'TONGA', lat: -20, lon: -175 ,  ai: 0 },
    TR: { colorCode: 37, name: 'TURKEY', lat: 39, lon: 35 ,  ai: 0 },
    TT: { colorCode: 171, name: 'TRINIDAD AND TOBAGO', lat: 11, lon: -61 ,  ai: 0 },
    TV: { colorCode: 220, name: 'TUVALU', lat: -8, lon: 178 ,  ai: 0 },
    TW: { colorCode: 19, name: 'TAIWAN', lat: 23.5, lon: 121 ,  ai: 0 },
    TZ: { colorCode: 88, name: 'TANZANIA', lat: -6, lon: 35 ,  ai: 0 },
    UA: { colorCode: 17, name: 'UKRAINE', lat: 49, lon: 32 ,  ai: 0 },
    UG: { colorCode: 38, name: 'UGANDA', lat: 1, lon: 32 ,  ai: 0 },
    US: { colorCode: 150, name: 'UNITED STATES OF AMERICA', lat: 38, lon: -97 ,  ai: 0 },
    UY: { colorCode: 109, name: 'URUGUAY', lat: -33, lon: -56 ,  ai: 0 },
    UZ: { colorCode: 154, name: 'UZBEKISTAN', lat: 41, lon: 64 ,  ai: 0 },
    VA: { colorCode: 225, name: 'HOLY SEE (VATICAN CITY STATE)', lat: 41.9, lon: 12.45 ,  ai: 0 },
    VC: { colorCode: 193, name: 'SAINT VINCENT AND THE GRENADINES', lat: 13.25, lon: -61.2 ,  ai: 0 },
    VE: { colorCode: 43, name: 'VENEZUELA', lat: 8, lon: -66 ,  ai: 0 },
    VG: { colorCode: 212, name: 'VIRGIN ISLANDS, BRITISH', lat: 18.5, lon: -64.5 ,  ai: 0 },
    VI: { colorCode: 196, name: 'VIRGIN ISLANDS, U.S.', lat: 18.3333, lon: -64.8333 ,  ai: 0 },
    VN: { colorCode: 91, name: 'VIETNAM', lat: 16, lon: 106 ,  ai: 0 },
    VU: { colorCode: 162, name: 'VANUATU', lat: -16, lon: 167 ,  ai: 0 },
    WF: { colorCode: 207, name: 'WALLIS AND FUTUNA', lat: -13.3, lon: -176.2 ,  ai: 0 },
    WS: { colorCode: 174, name: 'SAMOA', lat: -13.5833, lon: -172.3333 ,  ai: 0 },
    YE: { colorCode: 8, name: 'YEMEN', lat: 15, lon: 48 ,  ai: 0 },
    YT: { colorCode: 195, name: 'MAYOTTE', lat: -12.8333, lon: 45.1667 ,  ai: 0 },
    ZA: { colorCode: 86, name: 'SOUTH AFRICA', lat: -29, lon: 24 ,  ai: 0 },
    ZM: { colorCode: 60, name: 'ZAMBIA', lat: -15, lon: 30,  ai: 0 },
    ZW: { colorCode: 135, name: 'ZIMBABWE', lat: -20, lon: 30,  ai: 0 }
};


//funkcje do sprawdzenia poprawnośći przetłumaczonych nazw

/*
function checkCountryNames(){

    countriesByDeathsInWar.forEach(element => {
          for (let i = 0; i < element.length; i++) {
            if(countryNamesFromMSZ.indexOf(element[i])==-1){
                console.log(element[i]);
            }
        }
    });       
}
*/

/*
function checkCountryNames2() {

    for (var i in basicCountryData) {
        let country = basicCountryData[i];
        if(countryNamesFromMSZ.indexOf(country.name)==-1){
            console.log(country.name);
        }

    }
}
*/



const levelOfTerrorismComunicats=[
    "there have been no terrorist attacks in this country for a long time",
    "in this country, the number of terrorist attacks has been marginal in recent years",
    "in this country, the number of terrorist attacks has been minimal in recent years",
    "in this country, the number of terrorist attacks has been low in recent years",
    "in this country, the number of terrorist attacks has been below average in recent years",
    "in this country, the number of terrorist attacks has been average in recent years",
    "in this country, the number of terrorist attacks has been above average in recent years",
    "in this country the number of terrorist attacks has been high in recent years",
    "in this country the number of terrorist attacks has been very high in recent years",
    "this country is one of the countries where terrorist attacks are the most common"
];
const AIRateing=" in the ranking generated by AI is: ";
const warComunicats=[
    "no war in this country",
    "the scale of warfare in this country is close to zero",
    "this country conducts military operations on a very small scale",
    "this country conducts military operations on a small scale",
    "the scale of warfare in this country below average ",
    "this country conducts military operations on a medium scale",
    "the scale of warfare in this country above average ",
    "this country conducts military operations on a large scale",
    "this country conducts military operations on a extra large scale",
    "the scale of warfare in this country is close to maximum"    
];


// dane do systemu mailowego brane są ze strony https://www.meteoalarm.eu/po_PL/0/0/EU-Europa.html gdyż aplikacja ma na celu ostrzeganie ludnośći na terenie całej europy nie tylko Polski
// nastąpił jednak problem polityki danych wiec obecnie bez zezwolenia nie moge pobrać danych z tej strony natomiast można ze strony https://danepubliczne.imgw.pl/ ale tylko dla Polski
// z tego powodu zostałem przy formacie danych ze strony meteoalarm natomiast nie zdąże już napisać maila z prośbą o dostęp do api wiec umieszczam dane na "sztywno" pobrane skryptem

/*

const start=2;
const end=document.getElementsByTagName("tbody").length-1;
let type = "[";
let level = "[";
let areas = "[";
let first = true;
for(let i=start; i<=end; i++){
if(document.getElementsByTagName("tbody")[i].childNodes[12].lastElementChild.innerText == "Extreme"){
if(first){
first=false;
level += document.getElementsByTagName("tbody")[i].childNodes[12].lastElementChild.innerText;
type += document.getElementsByTagName("tbody")[i].childNodes[2].lastElementChild.innerText;
areas += document.getElementsByTagName("tbody")[i].childNodes[22].lastElementChild.innerText;
}
else{
level += "," + document.getElementsByTagName("tbody")[i].childNodes[12].lastElementChild.innerText;
type +=  "," + document.getElementsByTagName("tbody")[i].childNodes[2].lastElementChild.innerText;
areas += "," + document.getElementsByTagName("tbody")[i].childNodes[22].lastElementChild.innerText;
}
}
}
level += "]";
type += "]";
areas += "]";

*/

const areas = "[Slask,Opolskie]";
const level = "[Extreme,Extreme]";
const type = "[Extreme Thunderstorm Warning,Extreme Rain Warning]";
//dla uproszczenia zmieniłem tymczasowo regiony na wojewódctwa w ostateczenj wersji każdy region powinien być zaimplementowany
const wojewódctwa = ["Lodzkie", "Dolnoslaskie", "Kujawsko-pomorskie", "Lubelskie", "Lubuskie", "Malopolskie", "Mazowieckie", "Opolskie", "Podkarpackie", "Podlaskie", "Pomorskie", "Slaskie", "Swietokrzyskie", "Warminsko-mazurskie", "Wielkopolskie", "Zachodniopomorskie"];
