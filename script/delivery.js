function paste() {
    // Get user info from local storage
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));

    // Update the HTML elements with user data
    document.getElementById("name").innerHTML = userInfo.userjs;
    document.getElementById("address").innerHTML = userInfo.adressjs;
}

window.onload = paste;