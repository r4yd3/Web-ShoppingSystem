function colorMode() {
    var element = document.body;
    element.classList.toggle("lightmode");
    var colory = document.getElementById("colorModeID");
    if (colory.innerHTML === "☀️" ) {
        colory.innerHTML = "🌑";
    } else {
        element.className = "light-mode";
        colory.innerHTML = "☀️";
    }
}

