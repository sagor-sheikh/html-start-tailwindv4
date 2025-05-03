"user strict";
document.addEventListener('DOMContentLoaded', () => {

   // <========= Header Starts ============>
   const menu = document.querySelector(".menu");
   const menuInner = menu.querySelector(".menu-inner");
   const menuArrow = menu.querySelector(".menu-arrow");
   const burger = document.querySelector(".burger");
   const overlay = document.querySelector(".overlay");

   // Navbar Menu Toggle Function
   function toggleMenu() {
      menu.classList.toggle("is-active");
      overlay.classList.toggle("is-active");
   }

   // Show Mobile Submenu Function
   function showSubMenu(children) {
      subMenu = children.querySelector(".submenu");
      subMenu.classList.add("is-active");
      subMenu.style.animation = "slideLeft 0.35s ease forwards";
      const menuTitle = children.querySelector("i").parentNode.childNodes[0].textContent;
      menu.querySelector(".menu-title").textContent = menuTitle;
      menu.querySelector(".menu-header").classList.add("is-active");
   }

   // Hide Mobile Submenu Function
   function hideSubMenu() {
      subMenu.style.animation = "slideRight 0.35s ease forwards";
      setTimeout(() => {
         subMenu.classList.remove("is-active");
      }, 300);

      menu.querySelector(".menu-title").textContent = "";
      menu.querySelector(".menu-header").classList.remove("is-active");
   }

   // Toggle Mobile Submenu Function
   function toggleSubMenu(e) {
      if (!menu.classList.contains("is-active")) {
         return;
      }
      if (e.target.closest(".menu-dropdown")) {
         const children = e.target.closest(".menu-dropdown");
         showSubMenu(children);
      }
   }

   // Fixed Navbar Menu on Window Resize
   window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
         if (menu.classList.contains("is-active")) {
            toggleMenu();
         }
      }
   });

   // Initialize All Event Listeners
   burger.addEventListener("click", toggleMenu);
   overlay.addEventListener("click", toggleMenu);
   menuArrow.addEventListener("click", hideSubMenu);
   menuInner.addEventListener("click", toggleSubMenu);

   // <========= Header Ends ============>

   // <========= Progressbar Starts ============>
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            const progressBar = entry.target;
            const targetValue = progressBar.getAttribute("data-progress");
            progressBar.style.width = `${targetValue}%`;
            observer.unobserve(progressBar);
         }
      });
   }, {
      threshold: 0.3
   });

   document.querySelectorAll('.progress-bar').forEach(bar => {
      observer.observe(bar);
   });
   // <========= Progressbar Ends ============>
});
