/*selector */
const btn = document.querySelector(".hamburger");
const nav = document.getElementById('nav');
const list = document.getElementById('list');
const flexItems = document.querySelectorAll(".flex-item");
const navBar = document.querySelector(".nav-bar");


const tabRow1 = document.getElementById('tab-row1');
const tabRow2 = document.getElementById('tab-row2');
const tabRow3 = document.getElementById('tab-row3');


const flexLink1 = document.getElementById("flex-link1");
const flexLink2 = document.getElementById("flex-link2");
const flexLink3 = document.getElementById("flex-link3");

/* hamburger menu*/

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('navbar-mobile');
    list.classList.toggle('ul-nav');
});


/*flex items function */

flexItems.forEach((items, index) =>{
    items.addEventListener('click', () => {
     if (index === 0) {

         tabRow1.classList.add("active");
         tabRow2.classList.remove("active");
         tabRow3.classList.remove("active");
        
         flexLink1.classList.add("feature-active");
         flexLink2.classList.remove("feature-active");
         flexLink3.classList.remove("feature-active");

     }else if (index === 1) {

        tabRow1.classList.remove("active");
        tabRow2.classList.add("active");
        tabRow3.classList.remove("active");
        
        /* flexLink1.classList.remove("feature-active");
        flexLink2.classList.add("feature-active");
        flexLink3.classList.remove("feature-active"); */

     }else if (index === 2) {

        tabRow1.classList.remove("active");
        tabRow2.classList.remove("active");
        tabRow3.classList.add("active");

        /* flexLink1.classList.remove("feature-active");
        flexLink2.classList.remove("feature-active"); */
        flexLink3.classList.add("feature-active");

     }else{

        tabRow1.classList.add("active");

     }
    })
})

