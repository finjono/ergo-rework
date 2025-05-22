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

// Theme toggle logic (adapted from script-home.js)
function handleThemeToggle(themeButtonId, iconId) {
  var themebutton = document.getElementById(themeButtonId);
  if (!themebutton) return; 
  if (themebutton.disabled) {
    return;
  }

  themebutton.disabled = true;
  setTimeout(function() {
    themebutton.disabled = false;
  }, 1150);

  var body = document.querySelector("body");
  var isDarkMode = body.classList.toggle("dark-mode");
  setCookie("darkMode", isDarkMode ? "true" : "false", 365);

  var img = document.getElementById(iconId);
  if (!img) return; 
  var bildPfad = img.getAttribute("src");

  if (bildPfad.toLowerCase().includes("sonne")) {
    bildPfad = "mond";
  } else {
    bildPfad = "sonne";
  }

  img.classList.add("animate__animated", "animate__flip");
  img.addEventListener("animationend", function() {
    img.classList.remove("animate__animated", "animate__flip");
  }, { once: true });

  setTimeout(function () {
    img.setAttribute("src", "../src/img/website/" + bildPfad + ".png");
  }, 600);
}

// DOMContentLoaded (initial part for theme and basic listeners)
document.addEventListener("DOMContentLoaded", function() {
  // Apply initial theme
  var body = document.querySelector("body");
  var lightModeIcon = document.getElementById("lightmodeicon");
  var lightModeIconMobile = document.getElementById("lightmodeicon-mobile");
  var isDarkModeCookie = getCookie("darkMode");

  if (isDarkModeCookie === "true") {
    body.classList.add("dark-mode");
    if (lightModeIcon) lightModeIcon.setAttribute("src", "../src/img/website/mond.png");
    if (lightModeIconMobile) lightModeIconMobile.setAttribute("src", "../src/img/website/mond.png");
  } else {
    body.classList.remove("dark-mode"); 
    if (lightModeIcon) lightModeIcon.setAttribute("src", "../src/img/website/sonne.png");
    if (lightModeIconMobile) lightModeIconMobile.setAttribute("src", "../src/img/website/sonne.png");
  }

  // Add event listeners for theme buttons
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

  // Add event listener for cookie popup
  var cookieBtnImg = document.getElementById("cookie_popup_img");
  if (cookieBtnImg) {
    cookieBtnImg.addEventListener('click', cookiePopup);
  }
  
  // Add event listener for hamburger menu
  var menuButton = document.getElementById("menubutton");
  if (menuButton) {
    menuButton.addEventListener('click', hamburger);
  }

  // cardrem(); // This will be replaced by URL param logic later
  // quality_tips()
});

// Dropdown menu
// (hamburger function remains unchanged for now, ensure image paths are correct: ../src/img/website/)
function hamburger() {
  var menubutton = document.getElementById("menubutton");
  if (!menubutton) return;
  if (menubutton.disabled) {
    return; 
  }

  menubutton.disabled = true;
  setTimeout(function() {
      menubutton.disabled = false;
  }, 1000);

  var img = document.getElementById("menuicon");
  if (!img) return;
  var bildPfad = img.getAttribute("src");
  var mobilenav = document.getElementById("mobilenav");
  if (!mobilenav) return;

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
  }, { once: true });

  setTimeout(function () {
    img.setAttribute("src", "../src/img/website/" + bildPfad + ".png");
  }, 300);
}

// Global list of topic IDs for validation and iteration
const allTopicIds = [
  "saeuglinge", "kleinkinder", "schulkinder", 
  "praevention", "beratung", "lernwerkstatt", "erwachsene"
];

// Generic function to display topic content
function displayTopicContent(topicId) {
  const startAlertElement = document.getElementById("startalert");
  const topicContentContainer = document.getElementById("topic-content");

  if (!allTopicIds.includes(topicId)) {
    console.warn("Invalid topicId:", topicId);
    if (startAlertElement) startAlertElement.style.display = "block"; // Or "flex", "grid"
    if (topicContentContainer) topicContentContainer.style.padding = '3vw'; // Default padding

    allTopicIds.forEach(id => {
      const contentElement = document.getElementById('content-' + id);
      if (contentElement) contentElement.style.display = "none";
      const cardElement = document.getElementById('card_' + id);
      if (cardElement) cardElement.classList.remove("active-card", "active-card-dark");
    });
    return;
  }

  // Hide all topic content items (using the class that will be added to HTML)
  document.querySelectorAll('.topic-content-item').forEach(item => {
    item.style.display = "none";
  });
  
  // Show the selected topic content
  const selectedContentElement = document.getElementById('content-' + topicId);
  if (selectedContentElement) {
    selectedContentElement.style.display = "contents";
  }

  // Update active card styling
  allTopicIds.forEach(id => {
    const cardElement = document.getElementById('card_' + id);
    if (cardElement) {
      cardElement.classList.remove("active-card", "active-card-dark");
    }
  });

  const selectedCardElement = document.getElementById('card_' + topicId);
  if (selectedCardElement) {
    if (document.body.classList.contains("dark-mode")) {
      selectedCardElement.classList.add("active-card-dark");
    } else {
      selectedCardElement.classList.add("active-card");
    }
  }

  if (startAlertElement) startAlertElement.style.display = "none";
  if (topicContentContainer) topicContentContainer.style.padding = '2vw 3vw 7vw 3vw';

  const contentHeader = document.getElementById('scrollAnker-' + topicId) || selectedContentElement;
  if (contentHeader) {
    // Wait a brief moment for layout to settle, then scroll
    setTimeout(() => {
        contentHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  } else {
    // Fallback scroll, adjust Y value as needed
    setTimeout(() => {
        window.scrollTo({ top: window.scrollY + 300, behavior: 'smooth' });
    }, 50);
  }
}

// Modified DOMContentLoaded to include URL parsing for topics
document.addEventListener("DOMContentLoaded", function() {
  // Apply initial theme
  var body = document.querySelector("body");
  var lightModeIcon = document.getElementById("lightmodeicon");
  var lightModeIconMobile = document.getElementById("lightmodeicon-mobile");
  var isDarkModeCookie = getCookie("darkMode");

  if (isDarkModeCookie === "true") {
    body.classList.add("dark-mode");
    if (lightModeIcon) lightModeIcon.setAttribute("src", "../src/img/website/mond.png");
    if (lightModeIconMobile) lightModeIconMobile.setAttribute("src", "../src/img/website/mond.png");
  } else {
    body.classList.remove("dark-mode"); 
    if (lightModeIcon) lightModeIcon.setAttribute("src", "../src/img/website/sonne.png");
    if (lightModeIconMobile) lightModeIconMobile.setAttribute("src", "../src/img/website/sonne.png");
  }

  // Add event listeners for theme buttons
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

  // Add event listener for cookie popup
  var cookieBtnImg = document.getElementById("cookie_popup_img");
  if (cookieBtnImg) {
    cookieBtnImg.addEventListener('click', cookiePopup);
  }
  
  // Add event listener for hamburger menu
  var menuButton = document.getElementById("menubutton");
  if (menuButton) {
    menuButton.addEventListener('click', hamburger);
  }

  // Topic display logic from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const topic = urlParams.get('topic');
  const startAlertElement = document.getElementById("startalert");
  const topicContentContainer = document.getElementById("topic-content");

  if (topic && allTopicIds.includes(topic)) {
    displayTopicContent(topic);
  } else {
    // Default state: show startalert, hide all topic contents
    if (startAlertElement) startAlertElement.style.display = "block"; 
    allTopicIds.forEach(id => {
      const contentElement = document.getElementById('content-' + id);
      if (contentElement) contentElement.style.display = "none";
    });
    if (topicContentContainer) {
      topicContentContainer.style.padding = '3vw'; 
    }
  }
  // Removed quality_tips() call
});

// Removed old topic functions (Saeuglinge, Kleinkinder, etc.)
// Removed cardrem() and cardreset() functions
// Removed commented out /* scroll */ and /* quality_tips() */