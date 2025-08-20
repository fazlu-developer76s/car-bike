// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// // Toggle the menu when the hamburger icon is clicked
// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// });

// // Optional: Close the menu when a link is clicked (useful for single-page apps)
// document.querySelectorAll(".nav-link").forEach(link => {
//     link.addEventListener("click", () => {
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//     });
// });






      // Toggle mobile menu
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      // Close mobile menu when clicking on a nav link
      document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }));

      // Set active navigation link
      document.addEventListener("DOMContentLoaded", function() {
        const navLinks = document.querySelectorAll('.nav-item a');
        const currentPage = window.location.pathname.split('/').pop();
        
        // Set active class based on current page
        navLinks.forEach(link => {
          const linkPage = link.getAttribute('href');
          if (linkPage === currentPage) {
            link.classList.add('active');
          }
          
          // Add click event to set active class
          link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
          });
        });
        
        // If no active link found, set Home as active for index.php
        if (currentPage === 'index.php' || currentPage === '') {
          const homeLink = document.querySelector('.nav-item a[href="index.php"]');
          if (homeLink && !document.querySelector('.nav-item a.active')) {
            homeLink.classList.add('active');
          }
        }
      });
 