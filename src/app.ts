/*
* File: app.ts/js
* Author: Hermányi Gergely
* Copyright: 2021, Hermányi Gergely 
* Date: 2021-10-07
* Github: https://github.com/TheRealGerriii
* Group: SZOFT/II/N
*/
const diameter = document.querySelector("#diameter") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLInputElement;
const Button = document.querySelector("#Button");

function calcFinal(diameter: number):number {
    return (Math.pow(diameter / 2, 2) * Math.PI) / 2 * 2500;
}

Button.addEventListener('click', event => {

    result.value = String(calcFinal(+diameter.value).toFixed(1) + " Ft");

});