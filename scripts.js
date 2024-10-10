// Menu mobile
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  // Animação de scrollagem
  document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll('.area-dev div');
  
    function checkVisibility() {
      const windowHeight = window.innerHeight;
  
      divs.forEach(div => {
        const divTop = div.getBoundingClientRect().top;
  
        // Verifica se a div está na viewport
        if (divTop < windowHeight && divTop > 0) {
          if (!div.classList.contains('animated')) {
            div.classList.add('animated');
          }
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifica a visibilidade na carga inicial
  });
  