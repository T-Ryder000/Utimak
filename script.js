'use strict'

let bodyMain = document.querySelector('main')
let search = document.querySelector('#pesquisar')
let SearchText = document.querySelector('.none')

search.addEventListener('click', function(){
   let a = SearchText.className

   if(a == 'none'){
    SearchText.classList.add('search')
    SearchText.classList.remove('none')
    SearchText.style.width = '100%'
    search.style.display = 'none'
   }
})


let icon = document.querySelector('#opcoes')
let dropOptions = document.querySelector('.options')

icon.addEventListener('click', (e)=>{
  let b = dropOptions.style.display

  if(b == 'none'){
    dropOptions.style.display = 'block'
  }
  else{
    dropOptions.style.display = 'none'
  }
})




bodyMain.addEventListener('click', (e)=>{

    let a = SearchText.className
    let b = dropOptions.style.display

    if(a == 'search'){
    SearchText.classList.add('none')
    SearchText.classList.remove('search')
    search.style.display = 'block'
   }

   if(b == 'block'){
    dropOptions.style.display = 'none'
   }
})








/***************************************************************/

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];


let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
/**********************************************************************************/



const Categorias = document.querySelector('.nav-categoria')

let pressed = false
let startXX = 0

Categorias.addEventListener('mousedown', function (e) {
  pressed = true
  startXX = e.clientX
  this.style.cursor = 'grabbing'

})

Categorias.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  Categorias.style.cursor = 'grab'
})

Categorias.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startXX - e.clientX
})
/**********************************************************************************/


let slideWrapper = document.querySelector('.slide-wrapper')
let slideList = document.querySelector('.slide-list')
let slideItem = document.querySelectorAll('.slide-item')
let previus = document.querySelector('.previus')
let next = document.querySelector('.next')

const state = {
    startingPoint: 0,
    savePosition: 0,
    currentPoint: 0,
    movement: 0,
    currentSlideIndex: 0
}


function onMouseDown(event, index){
    const item = event.currentTarget
    state.startingPoint = event.clientX
    state.currentPoint = state.startingPoint - state.savePosition
    state.currentSlideIndex = index
    console.log(state.currentSlideIndex)
    item.addEventListener('mousemove', onMouseMove)
}

function onMouseMove(event){
    state.movement = event.clientX - state.startingPoint
    const position = event.clientX - state.currentPoint
    // console.log('pixel', event.clientX, '-', 'partida', startingPoint, ' =' , movement)
    slideList.style.transform ='translateX('+position+'px)'
    state.savePosition = position
}

function onMouseUp(event){
    const item = event.currentTarget
    item.removeEventListener('mousemove', onMouseMove)
}

slideItem.forEach(function(item, index){
    item.addEventListener('dragstart', function(event){
        event.preventDefault()
    })
    item.addEventListener('mousedown', function(event){
        onMouseDown(event, index)
    })
    item.addEventListener('mouseup', onMouseUp)

})

let cat = document.querySelectorAll('.type-categ')
 console.log(cat)
cat.forEach(function(item, index){
    item.addEventListener('click' ,function(event){
        event.preventDefault()
    })
})