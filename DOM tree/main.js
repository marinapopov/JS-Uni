//Ex7.1
let changeBackground = (color) => {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",(color) => changeBackground('red') );

 //Ex7.2
setTimeout(() => document.body.style.background = 'green', 3000);

// //Ex7.3
let chgBgcolor = (color) => {
  document.body.style.background = color;
}
