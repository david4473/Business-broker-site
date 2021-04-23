/*selectors */
const btn = document.querySelector(".hamburger");
const nav = document.getElementById('nav');
const list = document.getElementById('list');
const flexItems = document.querySelectorAll(".flex-item");
const navBar = document.querySelector(".nav-bar");
const moveUp = document.querySelector(".move-up ");

/*services button selectors */
const tabRow1 = document.getElementById('tab-row1');
const tabRow2 = document.getElementById('tab-row2');
const tabRow3 = document.getElementById('tab-row3');

const flexLinks = document.querySelectorAll("flex-link");
const flex1 = document.getElementById('flex-link1');
const flex2 = document.getElementById('flex-link2');
const flex3 = document.getElementById('flex-link3');

/*nav-bar links selector*/
const nav1 = document.getElementById('nav-btn1');
const nav2 = document.getElementById('nav-btn2');
const nav3 = document.getElementById('nav-btn3');
const nav4 = document.getElementById('nav-btn4');
const nav5 = document.getElementById('nav-btn5');


/*nav-bar links events*/
nav1.addEventListener('click', () => {
    nav1.classList.add("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
    nav4.classList.remove("active");
    nav5.classList.remove("active");
});

nav2.addEventListener('click', () => {
    nav1.classList.remove("active");
    nav2.classList.add("active");
    nav3.classList.remove("active");
    nav4.classList.remove("active");
    nav5.classList.remove("active");
});

nav3.addEventListener('click', () => {
    nav1.classList.remove("active");
    nav2.classList.remove("active");
    nav3.classList.add("active");
    nav4.classList.remove("active");
    nav5.classList.remove("active");
})

nav4.addEventListener('click', () => {
    nav1.classList.remove("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
    nav4.classList.add("active");
    nav5.classList.remove("active");
});

nav5.addEventListener('click', () => {
    nav1.classList.remove("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
    nav4.classList.remove("active");
    nav5.classList.add("active");
})

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

/*flex-lists functions */

flexLinks.forEach((item, index) =>{
    item.addEventListener('click', (e) => {
        console.log(e.target);
     if (index === 0) {
       flex1.classList.toggle("feature-active");
     }else if (index === 1) {
        flex2.classList.add("feature-active");
     }else if (index === 2) {
        flex3.classList.toggle("feature-active");
     }
     })
    })

    flex1.addEventListener('click', (e) => {
        const pressed = e.target;
        flex1.classList.add("feature-active");
        flex2.classList.remove("feature-active");
        flex3.classList.remove("feature-active");
        if (pressed) {
            flex1.classList.remove("active");
            flex2.classList.add("active");
            flex3.classList.add("active");
        }
    });
    
    flex2.addEventListener('click', (e) => {
        const pressed = e.target;
        flex1.classList.remove("feature-active");
        flex2.classList.add("feature-active");
        flex3.classList.remove("feature-active");
        if (pressed) {
            flex1.classList.add("active");
            flex2.classList.remove("active");
            flex3.classList.add("active");
        }
    });
    
    flex3.addEventListener('click', (e) => {
        const pressed = e.target;
        flex1.classList.remove("feature-active");
        flex2.classList.remove("feature-active");
        flex3.classList.add("feature-active");
        if (pressed) {
            flex1.classList.add("active");
            flex2.classList.add("active");
            flex3.classList.remove("active");
        }
    });


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

