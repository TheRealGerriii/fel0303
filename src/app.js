/*
* File: app.ts/js
* Author: Hermányi Gergely
* Copyright: 2021, Hermányi Gergely
* Date: 2021-10-07
* Github: https://github.com/TheRealGerriii
* Group: SZOFT/II/N
*/
var diameter = document.querySelector("#diameter");
var result = document.querySelector("#result");
var Button = document.querySelector("#Button");
function calcFinal(diameter) {
    return (Math.pow(diameter / 2, 2) * Math.PI) / 2 * 2500;
}
Button.addEventListener('click', function (event) {
    result.value = String(calcFinal(+diameter.value).toFixed(1) + " Ft");
});
