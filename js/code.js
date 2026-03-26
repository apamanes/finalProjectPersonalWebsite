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

function setTheTabs(){

    document.querySelectorAll(".tab-button").forEach(button =>  {
    
        button.addEventListener("click",() =>{

            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabsNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tab[data-tab="${tabsNumber}"]`);

            sideBar.querySelectorAll(".tab-button").forEach(button => {
                button.classList.remove("tab-button--active");
            });

            tabsContainer.querySelectorAll(".tab").forEach(tab => {
                tab.classList.remove("tab--active");
            });

            button.classList.add("tab-button--active");
            tabToActivate.classList.add("tab--active");


        });

    });

}


document.addEventListener("DOMContentLoaded", () => {

    setTheTabs();

});







