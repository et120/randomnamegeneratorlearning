import { RandomName } from "./randomfunction.js";

let nameInput = document.getElementById("nameInput");
let addBtn = document.getElementById("addBtn");
let randomBtn = document.getElementById("randomBtn");

let nameArray = [];

addBtn.addEventListener('click', function(){
    nameArray.push(nameInput.value);
    nameInput.value = "";
    console.log(nameArray);
});

randomBtn.addEventListener('click', function(){
    RandomName(nameArray);
});

