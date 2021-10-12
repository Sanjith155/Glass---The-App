let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");

var clock = setInterval(
    function time(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds();
      
      if(hr < 10){
          hr = "0" + hr;
      } 
      if(min < 10){
          min = "0" + min;
      } 
      if(sec < 10){
          sec = "0" + sec;
      }

      hour.textContent = hr;
      minute.textContent = min;
      seconds.textContent = sec;



    },1000
);