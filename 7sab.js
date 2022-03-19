const burg = document.querySelector(".burg");
const navMenu = document.querySelector(".nav-menu");
const ChangeLang = document.querySelector("#change-language");
const LanguagesAvailable = document.querySelector(".choose-language");


burg.addEventListener("click", () => {
    burg.classList.toggle("active");
    navMenu.classList.toggle("active");
    LanguagesAvailable.classList.remove("active");
})


ChangeLang.addEventListener("click" , () => {
    LanguagesAvailable.classList.toggle("active");
    
})
 


document.querySelectorAll(".a , .all-langs-a ").forEach(n => n. addEventListener("click" , () => {
        burg.classList.remove("active");
        navMenu.classList.remove("active");
        LanguagesAvailable.classList.remove("active");
    }))
    
   