// to switch between admin to user tab
document.getElementById("defaultOpen").click();

function openCity(evt, client) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(client).style.display = "block";
    evt.currentTarget.className += " active";
  }



  //admin login data
  function admin_login(){
    var id=document.getElementById("admincode").value;  
    var username=document.getElementById("adminusername").value;  
    var password=document.getElementById("adminpassword").value; 
    if(id==''||username==''||password==''){  
      alert("Enter each details correctly");  
      } 
    console.log(id);
    console.log(username);
    console.log(password);
    window.location="index.html";
  }