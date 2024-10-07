//Login
document.getElementById("loginButton").onclick=function(){

    var userscan = document.getElementById("name").value;
    var  passscan= document.getElementById("pass").value;
    var info = JSON.parse(localStorage.getItem("userInfo"));

    if (info && userscan === info.userjs && passscan === info.passjs) {
        var register = "true"; // Setting the "register" variable
        localStorage.setItem("register", register);
        window.location.href = "profile.html"; // Redirect to success page
        alert("Login Successfully");
    } else if (info && userscan === info.userjs && passscan !== info.passjs) {
        alert("Wrong password. Please try again.");
    } else if (userscan !== info.userjs && passscan === info.passjs) {
        alert("Wrong Username. Please try again.");
    } else if(userscan ==="" || passscan===""){
        //So that it wont run when no input
    }else {
        alert("Both Username and Password are wrong. Please try again.");
    }

    
}











