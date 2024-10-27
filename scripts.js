const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}

document.getElementById("email").addEventListener("focus", function() {
    this.placeholder = "Enter your email address";
  });
  
  document.getElementById("email").addEventListener("blur", function() {
    this.placeholder = "email@example.com";
  });

  window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
  
    const checkbox = document.getElementById('onlyShowVideo');
  
    if (type === 'video') {
      checkbox.checked = true;
    }
  });