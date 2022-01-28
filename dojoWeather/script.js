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
    //console.log(vTemp);

    //declare array to capture all high and low temps
    var tempsArray
    //for loop to go through each day's high and low temps
    //for each ".high-temp" and each ".low-temp"
    
    //conditional onSelect to calculate conversion for Celsuis to Farenheight
    if (vTemp == 'F') {
        //change high temp value
        highVal = document.querySelector(".high-temp").innerText;
        highVal = highVal * 1.8 + 32;
        document.querySelector(".high-temp").innerText = highVal;
        //change low temp value
        lowVal = document.querySelector(".low-temp").innerText;
        lowVal = Math.round(lowVal *1.8 + 32);
        document.querySelector(".low-temp").innerText = lowVal;
    }else {
        //convert F back to C for high temp
        highVal = (highVal -32) * 5/9;
        document.querySelector(".high-temp").innerText = highVal;
        //convert F back to C for low temp
        lowVal = Math.round((lowVal -32) * 5/9);

        document.querySelector(".low-temp").innerText = lowVal;
    }
}