let button  = document.getElementById("toggle-menu");
console.log(button);


button.addEventListener("click", () =>{
 let navLinks = document.getElementById("nav-links")
 navLinks.classList.toggle("active")
}) 




const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5, // Default for larger screens
  spaceBetween: 20, 
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px (small screens)
    320: {
      slidesPerView: 3, // Show 3 slides on small screens
    },
    // when window width is >= 768px (tablets and larger)
    991: {
      slidesPerView: 5, // Show 5 slides on larger screens
    }
  }
});

