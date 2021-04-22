/*selector */
const btn = document.querySelector(".hamburger");
const flexItems = document.querySelectorAll(".flex-item");
const tabRow1 = document.getElementById('tab-row1');
const tabRow2 = document.getElementById('tab-row2');
const tabRow3 = document.getElementById('tab-row3');


/* hamburger animation */
btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    console.log(hamburger);
});


/*flex items function */

flexItems.forEach((items, index) =>{
    items.addEventListener('click', () => {
     if (index === 0) {
         tabRow1.classList.add("active");
         tabRow2.classList.remove("active");
         tabRow2.classList.remove("active");
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



