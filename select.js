"use strict";

let items = document.querySelectorAll(".item");

function select() {
    let inputValue = document.getElementById("level").value;

    [].forEach.call(items, function(el) {
        el.classList.remove("selected");
    });

    if (inputValue < 10 && inputValue) {
        items[items.length - 6].classList.add("selected");
    } else if(inputValue < 20 && inputValue) {
        items[items.length - 5].classList.add("selected");
    } else if(inputValue < 30 && inputValue) {
        items[items.length - 4].classList.add("selected");
    } else if(inputValue < 40 && inputValue) {
        items[items.length - 3].classList.add("selected");
    } else if(inputValue < 50 && inputValue) {
        items[items.length - 2].classList.add("selected");
    } else if(inputValue < 60 && inputValue) {
        items[items.length - 1].classList.add("selected");
    }
}