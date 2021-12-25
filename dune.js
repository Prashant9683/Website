const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
  const itemNumber = movielists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click",()=>{
    clickCounter++;
    if(itemNumber - (4+clickCounter) >= 0 ) {
      movielists[i].style.transform = `translateX(${
        movielists[i].computedStyleMap().get("transform")[0].x.value
      -270}px)`;
    } else{
      movielists[i].style.transform = "translateX(0)";
      clickCounter=0;
    }
  });
});


const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
var element = document.getElementById("myElement");

function show_now() {
  search.classList.toggle('active')
  element.classList.toggle('active')
}

function menuToggle() {
  const toggleMenu = document.querySelector('.menu');
  toggleMenu.classList.toggle('active')
}