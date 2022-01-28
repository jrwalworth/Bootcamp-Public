function editProfile(element) {
    var pName = document.querySelector(element);
    // Request user to input new name
    pName.innerText = prompt("Please edit your name.", "Edit Name");
    // If user does not change name or cancels out of the prompt then default back to Jane Doe
    if (pName.innerText == "Edit Name" || pName.innerText == "") {
        pName.innerText = "Jane Doe";
    }
}

function removeUser(element) {
    //remove element
    document.querySelector(element).remove();
    // Update Connection Requests count after connection is removed.
    var updateNum = document.querySelector("#r-count").innerText--;
}

function addConnection(element) {
    // capture value of connection
    var tempData = document.querySelector(element).innerText;

    console.log(tempData);
    //User clicks to add connection; remove from connection requests
    document.querySelector(element).remove();
    
    //Create new HTML element for new connection and add to Your Connections
    var newConnection = document.createElement("div");
    newConnection.classList.add("c-names");
    newConnection.innerHTML = "<img class='c-icon' src='icons/user-circle.png' alt=''></img><h4> " + tempData + "</h4>"
    document.querySelector(".connection-names").appendChild(newConnection);

    //Increment connection count by 1
    var updateConn = document.querySelector("#c-count").innerText++;

    //Decrement request count by 1
    var updateReq = document.querySelector("#r-count");
    updateReq.innerText--;
}