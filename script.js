/*selector */
const btn = document.querySelector(".hamburger");
const nav = document.getElementById('nav');
const list = document.getElementById('list');
const flexItems = document.querySelectorAll(".flex-item");
const navBar = document.querySelector(".nav-bar");
const moveUp = document.querySelector(".move-up ");


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


     }else if (index === 1) {

        tabRow1.classList.remove("active");
        tabRow2.classList.add("active");
        tabRow3.classList.remove("active");
        

     }else if (index === 2) {

        tabRow1.classList.remove("active");
        tabRow2.classList.remove("active");
        tabRow3.classList.add("active");

     }else{

        tabRow1.classList.add("active");

     }
    })
})

/*sticky navbar */
window.onscroll = function(){
    scrollfunc();
    backToTop();
}

function scrollfunc(){
    if (window.scrollY > 100) {
        navBar.classList.add("sticky");
    }else{
        navBar.classList.remove("sticky");
    }
}

function backToTop(){
    if (window.scrollY > 100) {
        moveUp.classList.add("active");
    }else{
        moveUp.classList.remove("active");
    }
}