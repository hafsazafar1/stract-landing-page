let button  = document.getElementById("toggle-menu");
console.log(button);


button.addEventListener("click", () =>{
 let navLinks = document.getElementById("nav-links")
 navLinks.classList.toggle("active")
}) 


