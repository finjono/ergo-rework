// about card click
const aboutCard = document.getElementById('aboutCard');
const aboutBox = document.getElementById('aboutBox');
const overlay = document.getElementById('overlay');

aboutCard.addEventListener('click', () => {
  aboutBox.classList.toggle('show');
  overlay.classList.toggle('show');
});

// about box x
function closeAboutBox() {
  aboutBox.classList.remove('show');
  overlay.classList.remove('show');
}

// overlay click remover
overlay.addEventListener('click', () => {
  if (aboutBox.classList.contains('show')) { // Nur schließen, wenn die Box sichtbar ist
    aboutBox.classList.remove('show');
    overlay.classList.remove('show');
  }
});






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
  }, 200);

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

  cookiePopup_img.setAttribute("src", "src/img/website/" + cookie_img_src + ".png");
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
  setCookie("dark_everused",true,30);

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

  img.classList.add("animate__animated", "animate__flip");
  img.addEventListener("animationend", function() {
    img.classList.remove("animate__animated", "animate__flip");
  });

  setTimeout(function () {
    img.setAttribute("src", "src/img/website/" + bildPfad + ".png");
  }, 600);
}

// Check if the user had Dark Mode enabled
document.addEventListener("DOMContentLoaded", function() {
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
  }, 1150);
  setCookie("dark_everused",true,30);

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

  console.log(bildPfad);

  img.classList.add("animate__animated", "animate__flip");
  img.addEventListener("animationend", function() {
    img.classList.remove("animate__animated", "animate__flip");
  });


  setTimeout(function () {
    img.setAttribute("src", "src/img/website/" + bildPfad + ".png");
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
    img.setAttribute("src", "src/img/website/" + bildPfad + ".png");
  }, 300);
}

// TOPIC FUNCTIONS

function Saeuglinge() {
  var element = document.getElementById("content-saeuglinge");
  var current = element.style.display;
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
    topic_content.style.padding = '3vw 3vw 7vw 3vw';
  } 
}

function Kleinkinder() {
  var element = document.getElementById("content-kleinkinder");
  var current = element.style.display;
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
    topic_content.style.padding = '3vw 3vw 7vw 3vw';
  }
}

function Schulkinder() {
  var element = document.getElementById("content-schulkinder");
  var current = element.style.display;
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
    topic_content.style.padding = '3vw 3vw 7vw 3vw';
  }
}

function Praevention() {
  var element = document.getElementById("content-praevention");
  var current = element.style.display;
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
    topic_content.style.padding = '3vw 3vw 7vw 3vw';
  }
}

function Beratung() {
  var element = document.getElementById("content-beratung");
  var current = element.style.display;
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
    topic_content.style.padding = '3vw 3vw 7vw 3vw';
  }
}

function Lernwerkstatt() {
  var element = document.getElementById("content-lernwerkstatt");
  var current = element.style.display;
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
    topic_content.style.padding = '3vw 3vw 7vw 3vw';
  }
}

function Erwachsene() {
  var element = document.getElementById("content-erwachsene");
  var current = element.style.display; // für später: Eventuell mal "current" wieder deaktivieren
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
    topic_content.style.padding = '3vw 3vw 7vw 3vw';
  }
}

function rememberCard(id) {
  console.log(id);
  var cardname = id;
  var cardelement = document.getElementById(cardname);
  var isDarkModeCookie = getCookie("darkMode");

  if (cardname === "saeuglinge") {
    setCookie("remcard", "saeuglinge", 1);
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }

    setTimeout(function () {
      window.location.href = "../../site/praxisprofil.html";
    }, 200);
  }
  else if (cardname === "kleinkinder") {
    setCookie("remcard", "kleinkinder", 1);
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    setTimeout(function () {
      window.location.href = "../../site/praxisprofil.html";
    }, 200);
  }
  else if (cardname === "schulkinder") {
    setCookie("remcard", "schulkinder", 1);
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    setTimeout(function () {
      window.location.href = "../../site/praxisprofil.html";
    }, 200);
  }
  else if (cardname === "praevention") {
    setCookie("remcard", "praevention", 1);
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    setTimeout(function () {
      window.location.href = "../../site/praxisprofil.html";
    }, 200);
  }
  else if (cardname === "beratung") {
    setCookie("remcard", "beratung", 1);
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    setTimeout(function () {
      window.location.href = "../../site/praxisprofil.html";
    }, 200);
  }
  else if (cardname === "lernwerkstatt") {
    setCookie("remcard", "lernwerkstatt", 1);
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    setTimeout(function () {
      window.location.href = "../../site/praxisprofil.html";
    }, 200);
  }
  else if (cardname === "erwachsene") {
    setCookie("remcard", "erwachsene", 1);
    if (isDarkModeCookie === "true") {
      cardelement.classList.remove("active-card")
      cardelement.classList.add("active-card-dark");
    } else {
      cardelement.classList.remove("active-card-dark")
      cardelement.classList.add("active-card");
    }
    
    setTimeout(function () {
      window.location.href = "../../site/praxisprofil.html";
    }, 200);
  }
  else {
    console.log("Fehler: remcard")
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
    document.getElementById("saeuglinge").style.animationName = "slide-seeker";
  }
}

function quality_dark_anim() {
  var isMobile = window.innerWidth <= 890;
  if(getCookie("dark_everused") === null) {
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
}*/

document.querySelectorAll('.profil_img_box').forEach(card => {
  let animationFrame;

  const originalShadow = card.style.boxShadow;

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
  });

  card.addEventListener('mousemove', e => {
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(() => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      const rotateX = y / (height / -2) * 22;
      const rotateY = -x / (width / -2) * 22;

      var isDarkModeCookie = getCookie("darkMode");

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      if (isDarkModeCookie === "true") {
        card.style.boxShadow = `${-rotateY * 1}px ${rotateX * 1}px 20px rgba(255, 255, 255, 0.55)`;
      } else {
        card.style.boxShadow = `${-rotateY * 1}px ${rotateX * 1}px 20px rgba(0,0,0,0.45)`;
    }
    });
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
    card.style.boxShadow = originalShadow;
  });
});
