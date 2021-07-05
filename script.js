// Get the container to hold the IO globe
var isCountrySelected = false;
var container = document.getElementById("globalArea");
const net = new brain.NeuralNetwork();
// Create Gio.controller
var configs = {
    "control": {
        "stats": false,
        "disableUnmentioned": false,
        "lightenMentioned": false,
        "inOnly": false,
        "outOnly": false,
        "initCountry": "PL",
        "halo": true,
        "transparentBackground": false,
        "autoRotation": false,
        "rotationRatio": 0.01
    },
    "color": {
        // "surface": 1444048,
		// "selected": 2141154,
        "in": 0,
        "out": 0,
        "halo": 2330078,
        "background": 0
    },
    "brightness": {
        "ocean": 1,
        "mentioned": 1,
        "related": 0
    }
}
var controller = new GIO.Controller(container, configs);
// the callback function can get parameter contains some country data, the detailed of the parameter can be found in the API document

function callback(selectedCountry) {
    let timeOut;

    if (!isCountrySelected) {
        $("#infoBoard").fadeIn(1000);
    }
    isCountrySelected = true;
    //without jquery
    // document.getElementById("infoBoard").classList.remove("invisible");
    // setTimeout(function () {
    //     document.getElementById("infoBoard").classList.add("invisible");
    //     // $( "#infoBoard" ).style.display= "nene";

    // }, 3000);
    //with jquery and animation efect


    
      
        let indexOfTerrorism, indexOfWar;
        let terrorismAndWarString = "";
            for (let index = 0; index < countriesByDeathsInWar.length; index++) {
                const element = countriesByDeathsInWar[index];
                if(element.indexOf(selectedCountry.name)!=-1){
                    indexOfWar=index+1;
                    terrorismAndWarString = "level of warfare: " + warComunicats[index+1];
                    break;  
                }
                else{
                    indexOfWar=0;
                    terrorismAndWarString = "level of warfare: " + warComunicats[0];
                }
            }
            for (let index = 0; index < countriesByTerroristDanger.length; index++) {
                const element = countriesByTerroristDanger[index];
                if(element.indexOf(selectedCountry.name)!=-1){
                    indexOfTerrorism=index+1;
                    document.getElementById("explanation").innerHTML = "Terrorism level: " + levelOfTerrorismComunicats[index+1] + "<br>" + "<br>" + terrorismAndWarString;
                    break;  
                }
                else{
                    indexOfTerrorism=0;
                   document.getElementById("explanation").innerHTML = "Terrorism level: " + levelOfTerrorismComunicats[0] + "<br>" + "<br>" + terrorismAndWarString;
                }
            }
        $("#countryArea").text(selectedCountry.name + AIRateing + Math.floor(net.run([indexOfWar, indexOfTerrorism])*10+0.3));

        let index = countryNamesFromMSZ.indexOf(selectedCountry.name);
        if(index!=-1){
            document.getElementById("MSZlink").innerHTML= "<a target='_blank' class='hover_me' href='"+hrefToMSZ[index]+"'>Click here for more information</a>";
        }
        else{
            document.getElementById("MSZlink").innerHTML= "NO country or Polish MZS don't have it in their site";
        }
    


}


fetch("brain.json")
    .then(response => response.json())
    .then(brainData => createBrain(brainData));


function createBrain(brainData) {
    console.log(brainData);
    net.fromJSON(brainData);
    markingCountries();
}

function markingCountries(){
    
    
    let indexOfTerrorism, indexOfWar;
        for (var i in basicCountryData) {
            let currentCountry = basicCountryData[i];
            for (let index = 0; index < countriesByDeathsInWar.length; index++) {
                const element = countriesByDeathsInWar[index];
                if(element.indexOf(currentCountry.name)!=-1){
                    indexOfWar=index+1; 
                    break;
                }
                else{
                    indexOfWar=0;
                }
            }
            for (let index = 0; index < countriesByTerroristDanger.length; index++) {
                const element = countriesByTerroristDanger[index];
                if(element.indexOf(currentCountry.name)!=-1){
                    indexOfTerrorism=index+1;
                    break;  
                }
                else{
                    indexOfTerrorism=0;
                }
            }
            currentCountry.ai = Math.floor(net.run([indexOfWar, indexOfTerrorism])*10+0.3);
            
        }
    console.log(basicCountryData);
controller.init();

controller.onCountryPicked(callback);
}



document.getElementById("closeInfoBoard").addEventListener("click", function () {
    $("#infoBoard").fadeOut(600);
    isCountrySelected = false;
});


function toggleFullScreen(elem) {
    elem= document.getElementsByTagName("body")[0];
    console.log(document.width);
    if(window.innerWidth  < 600)
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }
}