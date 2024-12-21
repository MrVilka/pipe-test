function myf1() {
  window.open("kran-sh.html");
}
function myf5() {
  window.open('zadt.html')
}
function myf2() {
  window.open('flan.html')
}
function myf4() {
  window.open('det.html')
}
function myf3() {
  window.open('proche.html')
}

let burger = document.querySelector('.burger');
let nav = document.querySelector(".nav");
burger.addEventListener('click', function(){
  if(window.innerWidth < 701){
    this.classList.toggle('active');
    nav.classList.toggle('open');
  }
});
