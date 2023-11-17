import { RandomName } from "./randomfunction.js";

let nameInput = document.getElementById("nameInput");
let addBtn = document.getElementById("addBtn");
let randomBtn = document.getElementById("randomBtn");
let nameTxt = document.getElementById("nameTxt");
let removeBtn = document.getElementById("removeBtn");

let nameArray = [];
if(localStorage.getItem("names")){
    nameArray = JSON.parse(localStorage.getItem("names"))
};

addBtn.addEventListener('click', function(){
    nameArray.push(nameInput.value);
    nameInput.value = "";
    console.log(nameArray);

    localStorage.setItem("names", JSON.stringify(nameArray));
});

randomBtn.addEventListener('click', function(){
    nameTxt.innerText = RandomName(nameArray);
});

removeBtn.addEventListener('click', function(){
    let index = nameArray.indexOf(nameInput.value);
    nameArray.splice(index, 1);
    nameInput.value = "";

    localStorage.setItem("names", JSON.stringify(nameArray));
});