let switchC = document.querySelector("#switch-main");
let switchSi = document.querySelector("#switch-si");
let switchSu = document.querySelector("#switch-su");
let switchCircle = document.querySelectorAll(".switch_circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

const toggleClass = (selector, newClass) => {
    selector.classList.toggle(newClass);
}

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
    switchC.classList.add("is-gx");
    setTimeout(() => {
        switchC.classList.remove("is-gx");
    }, 1500)

    toggleClass(switchC, "is-txr");
    toggleClass(switchCircle[0], "is-txr");
    toggleClass(switchCircle[1], "is-txr");

    toggleClass(switchSi, "is-hidden");
    toggleClass(switchSu, "is-hidden");

    toggleClass(aContainer, "is-txl");
    toggleClass(bContainer, "is-txl");
    toggleClass(bContainer, "is-z200");
}

let buttonSwitch = (e) => {
    for (let i=0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", getButtons);
    }
    for (let i=0; i < switchBtn.length; i++) {
        switchBtn[i].addEventListener("click", changeForm);
    }
}

window.addEventListener("load", buttonSwitch);