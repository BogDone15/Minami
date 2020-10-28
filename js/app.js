// VANTA.CELLS({
//  el: "#body",
//  mouseControls: true,
//  touchControls: true,
//  gyroControls: false,
//  minHeight: 200.00,
//  minWidth: 200.00,
//  scale: 1.00,
//  color1: 0x1f2a2a,
//  color2: 0x141411
// })

$(document).ready(function(){
 $(".owl-carousel").owlCarousel({
  margin: 20,
  items: 2,
  nav: true,
  dots: false,
  navText: ["",""]
 });
});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
 window.addEventListener('scroll', animOnScroll);
 function animOnScroll(params) {
  for (let index = 0; index < animItems.length; index++) {
   const animItem = animItems[index];
   const animItemHeight = animItem.offsetHeight;
   const animItemOffset = offset(animItem).top;
   const animStart = 4;

   let animItemPoint = window.innerHeight - animItemHeight / animStart;

   if (animItemHeight > window.innerHeight) {
    animItemPoint = window.innerHeight - window.innerHeight / animStart;
   }

   if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
    animItem.classList.add('_active');
   } else {
    if (!animItem.classList.contains('_anim-no-hide')) {
     animItem.classList.remove('_active');
    }
   }

  }
 }

 function offset(el) {
  const rect = el.getBoundingClientRect(),
   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
 }

 setTimeout(() => {
  animOnScroll();
 }, 500);
 
}