function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  function cookiePopup() {
    var toggle_cookiebtn = document.getElementById("cookiebtn");
    if (toggle_cookiebtn.disabled) {
      return; 
    }
    
    // temp disable
    toggle_cookiebtn.disabled = true;
    setTimeout(function() {
      toggle_cookiebtn.disabled = false;
    }, 500);
  
    const cookiebtn = document.querySelector(".cookie-btn");
    const cookieimg = document.querySelector(".cookie-btn-img");
    const cookietxt = document.querySelector(".cookie_text");
  
      var cookiePopup_img = document.getElementById("cookie_popup_img");
      var cookie_img_src = cookiePopup_img.getAttribute("src");
  
      if(cookie_img_src.toLowerCase().includes("cookie")) {
        cookie_img_src = "x";
        cookiebtn.style.borderRadius = "25px";
        cookieimg.style.top = "15px";
        cookieimg.style.right = "15px";
        cookieimg.style.position = 'absolute';
        cookietxt.style.display = 'block';
  
      } else {
        cookie_img_src = "cookie";
        cookiebtn.style.padding = "8px 8px";
        cookiebtn.style.borderRadius = "50px";
        cookieimg.style.removeProperty('position');
        cookietxt.style.display = 'none';
        
      }
  
      cookieimg.classList.add("animate__animated", "animate__fadeInRight");
      cookieimg.addEventListener("animationend", function() {
        cookieimg.classList.remove("animate__animated", "animate__fadeInRight");
      });
  
    cookiePopup_img.setAttribute("src", "../src/img/website/" + cookie_img_src + ".png");
  };
  
  
  function toggleTheme() {
    var themebutton = document.getElementById("themebutton");
    if (themebutton.disabled) {
      return; 
    }
    
    // temp disable
    themebutton.disabled = true;
    setTimeout(function() {
      themebutton.disabled = false;
    }, 1150);
  
    // Toggle dark theme
    var body = document.querySelector("body");
    var isDarkMode = body.classList.toggle("dark-mode");
    setCookie("darkMode", isDarkMode ? "true" : "false", 365);
  
    // change img src
    var img = document.getElementById("lightmodeicon");
    var bildPfad = img.getAttribute("src");
  
    if (bildPfad.toLowerCase().includes("sonne")) {
      bildPfad = "mond";
    } else {
      bildPfad = "sonne";
    }
  
    console.log(bildPfad);
  
    img.classList.add("animate__animated", "animate__flip");
    img.addEventListener("animationend", function() {
      img.classList.remove("animate__animated", "animate__flip");
    });
  
    setTimeout(function () {
      img.setAttribute("src", "../src/img/website/" + bildPfad + ".png");
    }, 600);
  }
  
  // Check if the user had Dark Mode enabled
  document.addEventListener("DOMContentLoaded", function() {
        // Assuming getCookie() function exists and retrieves the cookie value
        var isDarkModeCookie = getCookie("darkMode");
        var isMobile = window.innerWidth <= 890;
  
        if (isDarkModeCookie === "true") {
          if (isMobile) {
            toggleThemeMobile();
          } else {
            toggleTheme();
          }
        } else {
          if (isMobile) {
            var mobilethemebutton = document.getElementById("themebutton-mobile");
            mobilethemebutton.classList.add("animate__animated", "animate__heartBeat");
            mobilethemebutton.addEventListener("animationend", function() {
              mobilethemebutton.classList.remove("animate__animated", "animate__heartBeat");
            });
          } else {
            var themebutton = document.getElementById("themebutton");
            themebutton.classList.add("animate__animated", "animate__headShake");
            themebutton.addEventListener("animationend", function() {
              themebutton.classList.remove("animate__animated", "animate__headShake");
            });
          }
        }
      });
  
  
  
  function toggleThemeMobile() {
    var themebutton = document.getElementById("themebutton-mobile");
    if (themebutton.disabled) {
      return; 
    }
    
    // temp disable
    themebutton.disabled = true;
    setTimeout(function() {
      themebutton.disabled = false;
    }, 1000);
  
    // Toggle dark theme
    var body = document.querySelector("body");
    var isDarkMode = body.classList.toggle("dark-mode");
    setCookie("darkMode", isDarkMode ? "true" : "false", 365);
  
    // change img src
    var img = document.getElementById("lightmodeicon-mobile");
    var bildPfad = img.getAttribute("src");
  
    if (bildPfad.toLowerCase().includes("sonne")) {
      bildPfad = "mond";
    } else {
      bildPfad = "sonne";
    }
  
    img.classList.add("animate__animated", "animate__flip");
    img.addEventListener("animationend", function() {
      img.classList.remove("animate__animated", "animate__flip");
    });
  
  
    setTimeout(function () {
      img.setAttribute("src", "../src/img/website/" + bildPfad + ".png");
    }, 600);
  }
  
  // Dropdown menu
  
  function hamburger() {
    var menubutton = document.getElementById("menubutton");
    if (menubutton.disabled) {
      return; 
    }
  
    menubutton.disabled = true;
    setTimeout(function() {
        menubutton.disabled = false;
    }, 1000);
  
    var img = document.getElementById("menuicon");
    var bildPfad = img.getAttribute("src");
    var mobilenav = document.getElementById("mobilenav")
  
    if (bildPfad.toLowerCase().includes("menu")) {
      bildPfad = "x";
      mobilenav.style.display = "contents";
    } else {
      bildPfad = "menu";
      mobilenav.style.display = "none";
    }
  
    img.classList.add("animate__animated", "animate__jello");
    img.addEventListener("animationend", function() {
      img.classList.remove("animate__animated", "animate__jello");
    });
  
    setTimeout(function () {
      img.setAttribute("src", "../src/img/website/" + bildPfad + ".png");
    }, 300);
  }