console.log("the page is working");

const header = document.getElementById("sticky-header");
const scrollLimit = 300; 


function handleScroll() {
   
    if (window.scrollY >= scrollLimit) {
        
        header.classList.add("sticky");
  } else {
       
       header.classList.remove("sticky");
   }
}

window.addEventListener("scroll", handleScroll);


