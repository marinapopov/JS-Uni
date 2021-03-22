//Ex7.1
// let changeBackground = (color) => {
//     document.body.style.background = color;
//  }
 
//  window.addEventListener("load",(color) => changeBackground('red') );

//Ex7.2
// setTimeout(() => document.body.style.background = 'green', 3000);

//Ex7.3
// let chgBgcolor = (color) => {
//   document.body.style.background = color;
// }

//Ex7.15
let num = document.getElementById("num");
num.onblur = num_blur;

function num_blur() {
    let input = this.value;
    let number = +input;
    if (number !== parseFloat(input) || !Number.isFinite(number))
        this.value = "0";
}
