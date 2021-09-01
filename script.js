let inputQuantity = Number(prompt('Введите колчисетво инпутов'));
if(isNaN(inputQuantity)) {
    alert("Введите число");
    throw new Error("inputQuantity insert type as number")
}
let pTaskDivider = document.createElement('h3');
pTaskDivider.classList.add('task')
document.body.prepend(pTaskDivider);
pTaskDivider.innerText = 'Первое задание';
let form = document.querySelector("form");

for(let i=1; i <= inputQuantity; i++){
    let inputCreater = document.createElement('input');
    let btnDiv = document.querySelector('.button');
    inputCreater.setAttribute("type", "text");
    inputCreater.classList.add("input-item");
    inputCreater.value = `Input ${i}`;
    if(i%2) {
        inputCreater.classList.add("input-item-odd")
        if (!(i%3)) {
            inputCreater.value = '';
            inputCreater.setAttribute("placeholder", "Divided to 3");
        }
        if(i === inputQuantity) {
            inputCreater.classList.add("margin-zero");
        }
    }
    else if (i === inputQuantity && !(i%3) ) {
        inputCreater.value = '';
        inputCreater.setAttribute("placeholder", "Divided to 3");
        inputCreater.classList.add("margin-zero");
    }
    else if (!(i%3)) {
        inputCreater.value = '';
        inputCreater.setAttribute("placeholder", "Divided to 3");

    }
    else if(i === inputQuantity) {
            inputCreater.classList.add("margin-zero");
    }
    form.insertBefore(inputCreater, btnDiv)
}


let pTaskDivider2 = document.createElement('h3');
pTaskDivider2.classList.add('task')

let wrapper = document.createElement('div');
wrapper.classList.add("task-wrapper")
form.after(wrapper);
wrapper.append(pTaskDivider2);
pTaskDivider2.innerText = 'Второе задание';
let btnStart = document.createElement('button');
btnStart.innerHTML = "Start";
let btnEnd = document.createElement('button');
btnEnd.innerHTML = "Stop";
wrapper.append(btnStart);
wrapper.append(btnEnd);

let timeBoard = document.createElement('h2');
wrapper.append(timeBoard);
timeBoard.innerHTML = "00:00:00";

let showTime = null;
function timeCount() {
    let date = new Date();
    timeBoard.innerHTML = `${date.toLocaleTimeString()}`;
}
window.onload = function() {
    showTime = setInterval(timeCount, 1000)
}
btnStart.addEventListener('click', function(){
    if (showTime) return;
    showTime = setInterval(timeCount, 1000);
});

btnEnd.addEventListener('click', function(){
    clearInterval(showTime);
    timeBoard.innerHTML = "00:00:00";
    showTime = null;
})

let pTaskDivider3 = document.createElement('h3');
pTaskDivider3.classList.add('task')
wrapper.after(pTaskDivider3);
pTaskDivider3.innerText = 'Третье задание';

let wrapperId = document.querySelector("#wrapper");
let footer = document.querySelector("#footer");
let main = document.querySelector("#main");

function placeChanger(node1, node2) {
    const afterNode2 = node2.nextElementSibling;
    const parent = node2.parentNode;
    node1.replaceWith(node2);
    parent.insertBefore(node1, afterNode2);
}
function backgroundChanger(tagName) {
    let tagCollection = document.querySelectorAll(tagName);
    tagCollection[tagCollection.length - 1].style.backgroundColor = "red";

}
placeChanger(footer, main);
backgroundChanger('p');
// placeChanger(main, footer);

let pTaskDivider4 = document.createElement('h3');
pTaskDivider4.classList.add('task')
wrapperId.after(pTaskDivider4);
pTaskDivider4.innerText = 'Четвёртое задание';

let menu = document.querySelector("#menu");

const INGREDIENTS = {
    "cocoa": ["cocoa powder", "milk", "sugar"],
    "cappuccino": ["milk", "coffee"], 
    "smoothie": ["banana", "orange", "sugar"],
    "matcha frappe": ["matcha", "milk", "ice"]
};

menu.addEventListener('click', function(e) {
    let elem = e.target;
    let elemText = e.target.innerText;
    elemText = elemText.split("\n");
    let olCreator = document.createElement('ol');
    elem.appendChild(olCreator);
    
    INGREDIENTS[elemText[0]].forEach((item) => {
        let liCreator = document.createElement('li');
        olCreator.appendChild(liCreator);
        liCreator.innerHTML = `${item}`
    });
    
    if(elem.childNodes.length > 2) {
       while(elem.childNodes.length > 1){
            elem.lastChild.remove()
        }
    }
})
    