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
      cardrem(); 
      // Assuming getCookie() function exists and retrieves the cookie value
      var isDarkModeCookie = getCookie("darkMode");
      var isMobile = window.innerWidth <= 890;

      if (isDarkModeCookie === "true") {
        document.documentElement.classList.add('no-transition');
        console.log("Transition added");
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
        setTimeout(() => {
          document.documentElement.classList.remove('no-transition');
          console.log("Transition removed");
        }, 300); 

      //quality_tips()
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

// TOPIC FUNCTIONS

function Saeuglinge() {
  var element = document.getElementById("content-saeuglinge");
  var current = element.style.display;

  setCookie("remcard", "saeuglinge", 1);
  window.scrollBy({
    top: 300,
    behavior: 'smooth'
  });  

  if (current == "none") {
    document.getElementById("content-saeuglinge").style.display = "contents";
    document.getElementById("content-kleinkinder").style.display = "none";
    document.getElementById("content-schulkinder").style.display = "none";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "none";
    document.getElementById("content-lernwerkstatt").style.display = "none";
    document.getElementById("content-erwachsene").style.display = "none";
    document.getElementById("startalert").style.display = "none";

    for (let i = 0; i < document.getElementsByClassName("active-card").length; i++) {
      document.getElementsByClassName("active-card")[i].classList.remove("active-card");
    }
    
    for (let i = 0; i < document.getElementsByClassName("active-card-dark").length; i++) {
      document.getElementsByClassName("active-card-dark")[i].classList.remove("active-card-dark");
    }

    var card = document.getElementById("card_saeuglinge");
    var isDarkModeCookie = getCookie("darkMode");
    if (isDarkModeCookie === "true") {
      card.classList.remove("active-card")
      card.classList.add("active-card-dark");
    } else {
      card.classList.remove("active-card-dark")
      card.classList.add("active-card");
    }

    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '2vw 3vw 7vw 3vw';
  } 
}

function Kleinkinder() {
  var element = document.getElementById("content-kleinkinder");
  var current = element.style.display;

  setCookie("remcard", "kleinkinder", 1);
  window.scrollBy({
    top: 300,
    behavior: 'smooth'
  });  

  if(current == "none") {
    document.getElementById("content-saeuglinge").style.display = "none";
    document.getElementById("content-kleinkinder").style.display = "contents";
    document.getElementById("content-schulkinder").style.display = "none";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "none";
    document.getElementById("content-lernwerkstatt").style.display = "none";
    document.getElementById("content-erwachsene").style.display = "none";
    document.getElementById("startalert").style.display = "none";

    

    for (let i = 0; i < document.getElementsByClassName("active-card").length; i++) {
      document.getElementsByClassName("active-card")[i].classList.remove("active-card");
    }
    
    for (let i = 0; i < document.getElementsByClassName("active-card-dark").length; i++) {
      document.getElementsByClassName("active-card-dark")[i].classList.remove("active-card-dark");
    }

    var card = document.getElementById("card_kleinkinder");
    var isDarkModeCookie = getCookie("darkMode");
    if (isDarkModeCookie === "true") {
      card.classList.remove("active-card")
      card.classList.add("active-card-dark");
    } else {
      card.classList.remove("active-card-dark")
      card.classList.add("active-card");
    }

    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '2vw 3vw 7vw 3vw';
  }
}

function Schulkinder() {
  var element = document.getElementById("content-schulkinder");
  var current = element.style.display;

  setCookie("remcard", "schulkinder", 1);
  window.scrollBy({
    top: 300,
    behavior: 'smooth'
  });  

  if(current == "none") {
    document.getElementById("content-saeuglinge").style.display = "none";
    document.getElementById("content-kleinkinder").style.display = "none";
    document.getElementById("content-schulkinder").style.display = "contents";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "none";
    document.getElementById("content-lernwerkstatt").style.display = "none";
    document.getElementById("content-erwachsene").style.display = "none";
    document.getElementById("startalert").style.display = "none";

    for (let i = 0; i < document.getElementsByClassName("active-card").length; i++) {
      document.getElementsByClassName("active-card")[i].classList.remove("active-card");
    }
    
    for (let i = 0; i < document.getElementsByClassName("active-card-dark").length; i++) {
      document.getElementsByClassName("active-card-dark")[i].classList.remove("active-card-dark");
    }

    var card = document.getElementById("card_schulkinder");
    var isDarkModeCookie = getCookie("darkMode");
    if (isDarkModeCookie === "true") {
      card.classList.remove("active-card")
      card.classList.add("active-card-dark");
    } else {
      card.classList.remove("active-card-dark")
      card.classList.add("active-card");
    }

    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '2vw 3vw 7vw 3vw';
  }
}

function Praevention() {
  var element = document.getElementById("content-praevention");
  var current = element.style.display;

  setCookie("remcard", "praevention", 1);
  window.scrollBy({
    top: 300,
    behavior: 'smooth'
  });  

  if(current == "none") {
    document.getElementById("content-saeuglinge").style.display = "none";
    document.getElementById("content-kleinkinder").style.display = "none";
    document.getElementById("content-schulkinder").style.display = "none";
    document.getElementById("content-praevention").style.display = "contents";
    document.getElementById("content-beratung").style.display = "none";
    document.getElementById("content-lernwerkstatt").style.display = "none";
    document.getElementById("content-erwachsene").style.display = "none";
    document.getElementById("startalert").style.display = "none";

    for (let i = 0; i < document.getElementsByClassName("active-card").length; i++) {
      document.getElementsByClassName("active-card")[i].classList.remove("active-card");
    }
    
    for (let i = 0; i < document.getElementsByClassName("active-card-dark").length; i++) {
      document.getElementsByClassName("active-card-dark")[i].classList.remove("active-card-dark");
    }

    var card = document.getElementById("card_praevention");
    var isDarkModeCookie = getCookie("darkMode");
    if (isDarkModeCookie === "true") {
      card.classList.remove("active-card")
      card.classList.add("active-card-dark");
    } else {
      card.classList.remove("active-card-dark")
      card.classList.add("active-card");
    }

    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '2vw 3vw 7vw 3vw';
  }
}

function Beratung() {
  var element = document.getElementById("content-beratung");
  var current = element.style.display;

  setCookie("remcard", "beratung", 1);
  window.scrollBy({
    top: 300,
    behavior: 'smooth'
  });  

  if(current == "none") {
    document.getElementById("content-saeuglinge").style.display = "none";
    document.getElementById("content-kleinkinder").style.display = "none";
    document.getElementById("content-schulkinder").style.display = "none";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "contents";
    document.getElementById("content-lernwerkstatt").style.display = "none";
    document.getElementById("content-erwachsene").style.display = "none";
    document.getElementById("startalert").style.display = "none";

    for (let i = 0; i < document.getElementsByClassName("active-card").length; i++) {
      document.getElementsByClassName("active-card")[i].classList.remove("active-card");
    }
    
    for (let i = 0; i < document.getElementsByClassName("active-card-dark").length; i++) {
      document.getElementsByClassName("active-card-dark")[i].classList.remove("active-card-dark");
    }

    var card = document.getElementById("card_beratung");
    var isDarkModeCookie = getCookie("darkMode");
    if (isDarkModeCookie === "true") {
      card.classList.remove("active-card")
      card.classList.add("active-card-dark");
    } else {
      card.classList.remove("active-card-dark")
      card.classList.add("active-card");
    }

    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '2vw 3vw 7vw 3vw';
  }
}

function Lernwerkstatt() {
  var element = document.getElementById("content-lernwerkstatt");
  var current = element.style.display;

  setCookie("remcard", "lernwerkstatt", 1);
  window.scrollBy({
    top: 300,
    behavior: 'smooth'
  });  

  if(current == "none") {
    document.getElementById("content-saeuglinge").style.display = "none";
    document.getElementById("content-kleinkinder").style.display = "none";
    document.getElementById("content-schulkinder").style.display = "none";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "none";
    document.getElementById("content-lernwerkstatt").style.display = "contents";
    document.getElementById("content-erwachsene").style.display = "none";
    document.getElementById("startalert").style.display = "none";

    for (let i = 0; i < document.getElementsByClassName("active-card").length; i++) {
      document.getElementsByClassName("active-card")[i].classList.remove("active-card");
    }
    
    for (let i = 0; i < document.getElementsByClassName("active-card-dark").length; i++) {
      document.getElementsByClassName("active-card-dark")[i].classList.remove("active-card-dark");
    }

    var card = document.getElementById("card_lernwerkstatt");
    var isDarkModeCookie = getCookie("darkMode");
    if (isDarkModeCookie === "true") {
      card.classList.remove("active-card")
      card.classList.add("active-card-dark");
    } else {
      card.classList.remove("active-card-dark")
      card.classList.add("active-card");
    }

    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '2vw 3vw 7vw 3vw';
  }
}

function Erwachsene() {
  var element = document.getElementById("content-erwachsene");
  var current = element.style.display;

  setCookie("remcard", "erwachsene", 1);
  window.scrollBy({
    top: 300,
    behavior: 'smooth'
  });  

  if(current == "none") {
    document.getElementById("content-erwachsene").style.display = "contents";
    document.getElementById("content-saeuglinge").style.display = "none";
    document.getElementById("content-kleinkinder").style.display = "none";
    document.getElementById("content-schulkinder").style.display = "none";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "none";
    document.getElementById("content-lernwerkstatt").style.display = "none";
    document.getElementById("startalert").style.display = "none";

    for (let i = 0; i < document.getElementsByClassName("active-card").length; i++) {
      document.getElementsByClassName("active-card")[i].classList.remove("active-card");
    }
    
    for (let i = 0; i < document.getElementsByClassName("active-card-dark").length; i++) {
      document.getElementsByClassName("active-card-dark")[i].classList.remove("active-card-dark");
    }

    var card = document.getElementById("card_erwachsene");
    var isDarkModeCookie = getCookie("darkMode");
    if (isDarkModeCookie === "true") {
      card.classList.remove("active-card")
      card.classList.add("active-card-dark");
    } else {
      card.classList.remove("active-card-dark")
      card.classList.add("active-card");
    }

    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '2vw 3vw 7vw 3vw';
  }
}

/* scroll */
/*
setInterval(function() {
  var isDarkModeCookie = getCookie("darkMode");
  body = document.querySelector('body');
  if (document.body.scrollTop >= 310) {
    if (isDarkModeCookie === "true") {
      body.style.background = 'radial-gradient(circle, rgba(77,77,77,1) 0%, rgba(52,52,52,1) 30%, rgba(0,0,0,1) 100%)';
    } else {
      body.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)';
    }
  } else {
    if (isDarkModeCookie === "true") {
      body.style.background = 'radial-gradient(circle, rgba(9, 43, 94, 0.792) 20%, rgb(0, 0, 0) 100%)';
    } else {
      body.style.background = 'radial-gradient(circle,rgba(46, 130, 179, 0.754) 20%, rgb(255, 255, 255) 100%)';
    }
  }
  // console.log(document.body.scrollTop);
}, 100);*/

function cardrem() {
  var cardname = getCookie("remcard");
  var cardelement = document.getElementById("card_" + cardname); // Da praxisprofil.html bei den IDs zusätzlich noch "card_" vorher stehen hat
  console.log(cardelement);
  var isDarkModeCookie = getCookie("darkMode");

  if (cardname === "saeuglinge") {
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    document.getElementById("content-erwachsene").style.display = "none";
    document.getElementById("content-saeuglinge").style.display = "contents";
    document.getElementById("content-kleinkinder").style.display = "none";
    document.getElementById("content-schulkinder").style.display = "none";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "none";
    document.getElementById("content-lernwerkstatt").style.display = "none";
    
    document.getElementById("startalert").style.display = "none";
    
    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '3vw 3vw 7vw 3vw';

    window.scrollBy({
      top: 300,
      behavior: 'smooth'
    });  
  }
  else if (cardname === "kleinkinder") {
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    document.getElementById("content-erwachsene").style.display = "none";
    document.getElementById("content-saeuglinge").style.display = "none";
    document.getElementById("content-kleinkinder").style.display = "contents";
    document.getElementById("content-schulkinder").style.display = "none";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "none";
    document.getElementById("content-lernwerkstatt").style.display = "none";
    
    document.getElementById("startalert").style.display = "none";
    
    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '3vw 3vw 7vw 3vw';

    window.scrollBy({
      top: 300,
      behavior: 'smooth'
    });  
  }
  else if (cardname === "schulkinder") {
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    document.getElementById("content-erwachsene").style.display = "none";
    document.getElementById("content-saeuglinge").style.display = "none";
    document.getElementById("content-kleinkinder").style.display = "none";
    document.getElementById("content-schulkinder").style.display = "contents";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "none";
    document.getElementById("content-lernwerkstatt").style.display = "none";
    
    document.getElementById("startalert").style.display = "none";
    
    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '3vw 3vw 7vw 3vw';

    window.scrollBy({
      top: 300,
      behavior: 'smooth'
    });  
  }
  else if (cardname === "praevention") {    
    if (isDarkModeCookie === "true") {
    cardelement.classList.remove("active-card")
    cardelement.classList.add("active-card-dark");
  } else {
    cardelement.classList.remove("active-card-dark")
    cardelement.classList.add("active-card");
  }
  
  document.getElementById("content-erwachsene").style.display = "none";
  document.getElementById("content-saeuglinge").style.display = "none";
  document.getElementById("content-kleinkinder").style.display = "none";
  document.getElementById("content-schulkinder").style.display = "none";
  document.getElementById("content-praevention").style.display = "contents";
  document.getElementById("content-beratung").style.display = "none";
  document.getElementById("content-lernwerkstatt").style.display = "none";
  
  document.getElementById("startalert").style.display = "none";
  
  var topic_content = document.getElementById("topic-content");
  topic_content.style.padding = '3vw 3vw 7vw 3vw';

  window.scrollBy({
    top: 300,
    behavior: 'smooth'
  });  
}
  else if (cardname === "beratung") {
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    document.getElementById("content-erwachsene").style.display = "none";
    document.getElementById("content-saeuglinge").style.display = "none";
    document.getElementById("content-kleinkinder").style.display = "none";
    document.getElementById("content-schulkinder").style.display = "none";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "contents";
    document.getElementById("content-lernwerkstatt").style.display = "none";
    
    document.getElementById("startalert").style.display = "none";
    
    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '3vw 3vw 7vw 3vw';

    window.scrollBy({
      top: 300,
      behavior: 'smooth'
    });  
  }
  else if (cardname === "lernwerkstatt") {
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    document.getElementById("content-erwachsene").style.display = "none";
    document.getElementById("content-saeuglinge").style.display = "none";
    document.getElementById("content-kleinkinder").style.display = "none";
    document.getElementById("content-schulkinder").style.display = "none";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "none";
    document.getElementById("content-lernwerkstatt").style.display = "contents";
    
    document.getElementById("startalert").style.display = "none";
    
    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '3vw 3vw 7vw 3vw';

    window.scrollBy({
      top: 300,
      behavior: 'smooth'
    });  
  }
  else if (cardname === "erwachsene") {
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    document.getElementById("content-erwachsene").style.display = "contents";
    document.getElementById("content-saeuglinge").style.display = "none";
    document.getElementById("content-kleinkinder").style.display = "none";
    document.getElementById("content-schulkinder").style.display = "none";
    document.getElementById("content-praevention").style.display = "none";
    document.getElementById("content-beratung").style.display = "none";
    document.getElementById("content-lernwerkstatt").style.display = "none";
    
    document.getElementById("startalert").style.display = "none";
    
    var topic_content = document.getElementById("topic-content");
    topic_content.style.padding = '3vw 3vw 7vw 3vw';

    window.scrollBy({
      top: 300,
      behavior: 'smooth'
    });  
  }
  else {
    console.log("Fehler: remcard / Reset")
  }
}

function cardreset() {
  setCookie("remcard", "none", 1);
}

/*function quality_tips() {
  if(getCookie("visits") === null) {
    setCookie("visits", 1, 14);
  }
  let visits = parseInt(getCookie("visits"));
  setCookie("visits",++visits, 14);
  if (getCookie("visits") < 6) {
    document.getElementById("card_saeuglinge").style.animationName = "slide-seeker";
  }
}*/