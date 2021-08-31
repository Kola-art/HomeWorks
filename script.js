let inputQuantity = Number(prompt('Введите колчисетво инпутов'));
if(isNaN(inputQuantity)) {
    alert("Введите число");
    throw new Error("inputQuantity insert type as number")
}

for(let i=1; i <= inputQuantity; i++){
    let inputCreater = document.createElement('input');
    let btnDiv = document.querySelector('.button');
    let form = document.querySelector('form');
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
