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

function handleThemeToggle(themeButtonId, iconId) {
  var themebutton = document.getElementById(themeButtonId);
  if (themebutton.disabled) {
    return;
  }

  // temp disable
  themebutton.disabled = true;
  setTimeout(function() {
    themebutton.disabled = false;
  }, 1150);
  setCookie("dark_everused", true, 30);

  // Toggle dark theme
  var body = document.querySelector("body");
  var isDarkMode = body.classList.toggle("dark-mode");
  setCookie("darkMode", isDarkMode ? "true" : "false", 365);

  // change img src
  var img = document.getElementById(iconId);
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
  var isDarkModeCookie = getCookie("darkMode");
  var body = document.querySelector("body");
  var lightModeIcon = document.getElementById("lightmodeicon");
  var lightModeIconMobile = document.getElementById("lightmodeicon-mobile");

  if (isDarkModeCookie === "true") {
    body.classList.add("dark-mode");
    if (lightModeIcon) {
      lightModeIcon.setAttribute("src", "src/img/website/mond.png");
    }
    if (lightModeIconMobile) {
      lightModeIconMobile.setAttribute("src", "src/img/website/mond.png");
    }
  } else {
    // Ensure icons are set to sun if not dark mode (e.g., cookie expired or first visit)
    if (lightModeIcon) {
      lightModeIcon.setAttribute("src", "src/img/website/sonne.png");
    }
    if (lightModeIconMobile) {
      lightModeIconMobile.setAttribute("src", "src/img/website/sonne.png");
    }
  }
  //quality_tips()
});

// Event listeners for theme toggle buttons
var themeButtonDesktop = document.getElementById("themebutton");
if (themeButtonDesktop) {
  themeButtonDesktop.addEventListener('click', function() {
    handleThemeToggle("themebutton", "lightmodeicon");
  });
}

var themeButtonMobile = document.getElementById("themebutton-mobile");
if (themeButtonMobile) {
  themeButtonMobile.addEventListener('click', function() {
    handleThemeToggle("themebutton-mobile", "lightmodeicon-mobile");
  });
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
  var cardelement = document.getElementById(id);
  // Ensure cardelement exists to prevent errors if ID is incorrect
  if (!cardelement) {
    console.error("Element with ID '" + id + "' not found.");
    return;
  }

  var isDarkMode = document.body.classList.contains("dark-mode");

  // Remove existing active classes from other cards if any (though this should ideally be handled by the page itself)
  // For now, just focus on the clicked card
  var activeCards = document.querySelectorAll(".active-card, .active-card-dark");
  activeCards.forEach(function(card) {
    card.classList.remove("active-card", "active-card-dark");
  });

  if (isDarkMode) {
    cardelement.classList.add("active-card-dark");
  } else {
    cardelement.classList.add("active-card");
  }

  // Construct URL and navigate
  // Path is relative to index.html, which is in the root directory.
  // script-home.js is in src/js/, so praxisprofil.html in site/ is at ../../site/praxisprofil.html
  // However, this script is executed in the context of index.html in the root.
  // So the path should be relative to the root.
  var targetUrl = "site/praxisprofil.html?topic=" + id;
  
  setTimeout(function () {
    window.location.href = targetUrl;
  }, 200); // Keep small delay for visual feedback of class change
}

// Removed cardreset() function
// Removed commented out quality_tips() and quality_dark_anim()