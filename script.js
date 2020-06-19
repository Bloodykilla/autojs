
let i = 0;
let txt1 = 'Wellcome back, Lets ride...'; /* The text */
let speed1 = 200; /* The speed/duration of the effect in milliseconds */

function typeWriterRide() {
  
  if (i < txt1.length) {
    document.getElementById("text").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriterRide, speed1);
  }
  else if (i>txt1.legth) {  
  document.getElementById("text").innerHTML -= txt1.charAt(i);
  i--;
  setTimeout(typeWriterRide, speed1);
  }
}
function update_odometr_count() {
  $('#odometr b').animate({
      counter: 100
      
  }, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
          $(this).text(Math.ceil(now));
      },
      complete: update_odometr_count
    }
  );
};


let n = 0;
let txt2 = 'We arived'; /* The text */
let speed2 = 200; /* The speed/duration of the effect in milliseconds */

function typeWriterEnd() {
  
  if (n < txt2.length) {
    document.getElementById("text").innerHTML += txt2.charAt(n);
    n++;
    setTimeout(typeWriterEnd, speed2);
  }
}
function animation1(){
document.getElementById("strelka").animate(
  [
    { transform: 'rotateZ(-10deg)', color: '#000' },
    { transform: 'rotateZ(60deg) ', color: '#000' },
    { transform: 'rotateZ(80deg) ', color: '#000' },
    { transform: 'rotateZ(120deg) ', color: '#000' },
    { transform: 'rotateZ(140deg) ', color: '#000' },
    { transform: 'rotateZ(160deg) ', color: '#000' },
    { transform: 'rotateZ(120deg) ', color: '#000' },
    { transform: 'rotateZ(90deg) ', color: '#000' },
    {transform: 'rotateZ(-10deg)', color: '#000' }
  ], {
    duration: 4000,
    iterations: 1
  }
)
}
function animation2(){
document.getElementById("strelka1").animate(
  [
    { transform: 'rotateZ(-10deg)', color: '#000' },
    { transform: 'rotateZ(30deg) ', color: '#000' },
    { transform: 'rotateZ(40deg) ', color: '#000' },
    { transform: 'rotateZ(50deg) ', color: '#000' },
    {transform: 'rotateZ(-10deg)', color: '#000' }
  ], {
    duration: 4000,
    iterations: 1
  } 
);
}

let x = document.getElementById("myAudio"); 
function playAudio() { 
  x.play(); 
} 

function RideAnimation(){
  animation1();
  animation2();
  update_odometr_count();
  playAudio()
setTimeout(function(){
  alert( "We had arrived")
},5000);
}
function OnloadAnimaition(){
  typeWriterRide();
}


function Random(){
  let x = Math.floor(Math.random() * 8)+1;
  if (x == 1){
    blink_img1();
    setInterval(blink_img1,1000)
    alert("Engine hazard!");
  }
   else if (x == 2){
    blink_img2();
    setInterval(blink_img2,1000)
    alert("Pump your wheels!");
  }
  else if (x == 3){
    blink_img3();
    setInterval(blink_img3,1000)
    alert("Out of Oil!");
  }
  else if (x == 4){
    blink_img4();
    setInterval(blink_img4,1000)
    alert("Low battery!");
  }
  else if (x == 5){
    blink_img5();
    setInterval(blink_img5,1000)
    alert("Breaks were broke");
  }
  else if (x == 5){
    blink_img6();
    setInterval(blink_img6,1000)
    alert("Lamps are not  working");
  }
  else if (x == 5){
    blink_img7();
    setInterval(blink_img7,1000)
    alert("Connect your safe belt");
  }
  else {
    alert("Your car is ready to drive!");
  }
}
function blink_img1() {
  $('.myImg4').fadeOut(500);
  $('.myImg4').fadeIn(500);
}

function blink_img2() {
  $('.myImg8').fadeOut(500);
  $('.myImg8').fadeIn(500);
}
function blink_img3() {
  $('.myImg6').fadeOut(500);
  $('.myImg6').fadeIn(500);
}
function blink_img4() {
  $('.myImg1').fadeOut(500);
  $('.myImg1').fadeIn(500);
}
function blink_img5() {
  $('.myImg3').fadeOut(500);
  $('.myImg3').fadeIn(500);
}
function blink_img6() {
  $('.myImg5').fadeOut(500);
  $('.myImg5').fadeIn(500);
}
function blink_img7() {
  $('.myImg7').fadeOut(500);
  $('.myImg7').fadeIn(500);
}

