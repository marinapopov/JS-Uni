//Ex7.1
let changeBackground = (color) => {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",(color) => changeBackground('red') );

 //Ex7.2
 setTimeout(function(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'green'
  }, 3000);

//Ex7.3
function orange() {
    document.bgColor = "orange";
}
