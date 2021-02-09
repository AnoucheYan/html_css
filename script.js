window.onload=function() {
  // Getting onload useful elements
  var menuBtn = document.getElementById("menuButton");
  var bookingBtn = document.getElementById("bookingButton");
  //

  
  //Scroling functions with smooth effect
  menuBtn.onclick = function() {
    document.querySelector("#menu").scrollIntoView({ 
      behavior: "smooth"
    });
  };


  bookingBtn.onclick = function() {
    document.querySelector("#booking").scrollIntoView({ 
      behavior: "smooth"
    });
  };
  //

};  
