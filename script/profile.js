  function value() {

      // Check if there's a stored image URL in localStorage
      var storedImageUrl = localStorage.getItem("image");

      // Get the image element
      var image = document.getElementById("output");

      // If there's a stored URL, set it as the image source
      if (storedImageUrl) {
          image.src = storedImageUrl;
      } else {
          // If there's no stored URL, you can set a default image source
          image.src = "https://cdn.glitch.global/76e29d48-d51d-4e03-86b6-9606a4314f66/profile.jpg"; // Replace with your default image source
      }

      //Get Item from Local storage
      var userInfo=JSON.parse(localStorage.getItem("userInfo"));    

      if (userInfo) {
        // Set variable to this input ID
        var namevalue = document.getElementById("name");
        var adressvalue = document.getElementById("adress");
    
        // Set the values of the input fields
        namevalue.value = userInfo.userjs;
        adressvalue.value = userInfo.adressjs;
      }

      var Newemail = localStorage.getItem("email");
      var Newcontact =localStorage.getItem("contact");
      var birthDate = localStorage.getItem("Birth");

      if(birthDate){
        document.getElementById("birth").value=birthDate;
      }

      if(Newemail){
        document.getElementById("email").value=Newemail;
      }

      if(Newcontact){
        document.getElementById("contact").value=Newcontact;
      }
    }

    //Whenever loaded it will run this function
  window.onload=value;
  
  function save(){
        // Get the image URL from the "output" element
    var image = document.getElementById("output").src;

    // Check if the image URL is not empty
    if (image) {
        // Store the image URL in localStorage
        localStorage.setItem("image", image);
    }
   

    //Get userinfo from local storage
    var userInfo=JSON.parse(localStorage.getItem("userInfo"));

    //Update the user data
    userInfo.userjs=document.getElementById("name").value
    userInfo.adressjs=document.getElementById("adress").value

  
    localStorage.setItem("userInfo",JSON.stringify(userInfo));

    // Get email and contact values from input fields
    var Newemail = document.getElementById("email").value;
    var Newcontact = document.getElementById("contact").value;
    var birthDate = document.getElementById("birth").value
  
    // Save email and contact to localStorage
    localStorage.setItem("Birth",birthDate);
    localStorage.setItem("email", Newemail);
    localStorage.setItem("contact", Newcontact);

     // Change the id attribute of the file input element permanently
     var fileInput = document.getElementById("file");
     fileInput.id = "newFileId"; // Change to a new ID

    //Reload the page
    window.location.reload();

    alert("Sucessfully Save");
  }

  //Log Out   
  function popup(){
    var popupElement = document.getElementById("popup");
    if (popupElement) {
        popupElement.style.visibility = "visible"; // Show the popup
    }
  }

  document.getElementById("yes").onclick =function(){
    alert("Sucessfully Log Out");
    window.location.href='https://tarumt-wdd.glitch.me/index.html'; //does relative not work? -- answer me momo
    localStorage.setItem("register",false)
  }

  document.getElementById("no").onclick=function(){
    document.getElementById("popup").style.visibility="hidden";
  }
    

  var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
    var imageUrl = image.src;
    localStorage.setItem("image", imageUrl);
};
  


