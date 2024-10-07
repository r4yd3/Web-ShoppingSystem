function userprofile(){
  
      // Check if the user is registered based on the "register" flag in localStorage
      var isRegistered = localStorage.getItem("register") === "true";
  
      if (isRegistered) {
        window.location.href = 'https://tarumt-wdd.glitch.me/page/profile.html';} // Redirect to the profile page if registered
else {
        window.location.href = 'https://tarumt-wdd.glitch.me/page/membership.html'; // Redirect to the membership page if not registered
      }
  }