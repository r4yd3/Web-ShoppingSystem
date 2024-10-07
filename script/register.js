 //Register
document.getElementById("jsButton").onclick = function register() {
    var user =document.getElementById("registerName").value;
    var pass=document.getElementById("registerPass").value;
    var pass2=document.getElementById("registerPass2").value;
    var adress=document.getElementById("address").value;

    if((pass==pass2) && (pass!="" || pass2!="")){
        localStorage.clear();
        alert("You have successfully registered!");
        var userInfo = {
            userjs: user,
            passjs: pass,
            adressjs:adress
        };
        // Store the object in localStorage
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        window.location.href = "membership.html";
    }else if(user=="" && pass=="" && pass2=="" && adress==""){
        alert("Please fill in your details to proceed.")
    }else if(user==""){
        alert("Please enter your username");
    }else if(pass=="" || pass2==""){
        alert("Please enter your password.");
    }else if(adress==""){
        alert("Please enter your address.");
    }else{
        alert("Password matching incorrect.");
    }

 }