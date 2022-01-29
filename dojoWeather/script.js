function changeCity(element) {
    //Get innerText from clicked Menu list item
    var innerCity = element.innerText;

    //Display alert when city is clicked
    alert("Loading weather report for " + innerCity + "...")

    //Declare where to update the City Name
    var newTitle = document.querySelector(".city-title");

    //Send innerText from clicked menu list item to city title area.
    newTitle.innerText = innerCity;
}

function dismissCookie (element) {
    //remove entire cookie element
    document.querySelector(element).remove();
}

function tempConvert(element) {
    
    var vTemp = document.querySelector("#temp-select").value;

    //declare arrays to capture all high and low temps
    var htemps = document.getElementsByClassName('high-temp');
    console.log(htemps.length);

    var ltemps = document.getElementsByClassName('low-temp');
    console.log(ltemps);

    // TODO - combine temps into one array
    // var allTemps = htemps.concat(ltemps);
    // console.log(allTemps);

    //console.log(allTemps);
    //console.log(temps);

    //conditional onSelect to calculate conversion for Celsuis to Farenheight
    if (vTemp == 'F') {
        for (var i=0; i < htemps.length; i++) {
            var uhtemp = htemps[i].innerText;
            var ultemp = ltemps[i].innerText;
            uhtemp = Math.round(uhtemp * 1.8 +32);
            ultemp = Math.round(ultemp * 1.8 +32);
            htemps[i].innerText = uhtemp;
            ltemps[i].innerText = ultemp;
        }
    } else {
        for (var i=0; i < htemps.length; i++) {
            var uhtemp = htemps[i].innerText;
            var ultemp = ltemps[i].innerText;
            uhtemp = Math.round((uhtemp -32) * 5/9);
            ultemp = Math.round((ultemp -32) * 5/9);
            htemps[i].innerText = uhtemp;
            ltemps[i].innerText = ultemp;
        }

    }

}
