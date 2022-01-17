var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function myFunction() {
  var element = document.getElementById("deleteclass");
  element.classList.remove("mySwiper");
  element.classList.remove("swiper");
  element.classList.add("brands__desktop");

  let el = document.getElementById("deleteclass2");
  el.classList.remove("swiper-wrapper");
  console.log(`el`, el);
  el.classList.add("brands__desktop2");

  let el2 = document.getElementById("deleteclass3");
  el2.classList.remove("swiper-slide");
  console.log(`el`, el);
  el2.classList.add("brands__desktop3");

  let el3 = document.querySelectorAll("#deleteclass2 .swiper-slide");
  // .forEach((n) => n.classList.remove("swiper-slide"));
  console.log(typeof el3);
  for (key in el3) {
    /* ... делать что-то с obj[key] ... */
    el3[key].classList.remove("swiper-slide");
    el3[key].classList.add("brands__desktop3");
  }
}
const screenWidth = window.screen.width;
console.log(screenWidth);
if (screenWidth >= 365) {
  console.log("good job");
  let show = (document.getElementsByClassName("show_more")[0].style =
    "display: flex");
  console.log(`show`, show);
  myFunction();
}

function showMore() {
  let stylyChange = (document.getElementsByClassName(
    "brands__desktop"
  )[0].style = "height: 220px");
  stylyChange;
}
