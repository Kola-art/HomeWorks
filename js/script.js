// task 1

const fisrtPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            let number = Math.floor(Math.random() * 6) + 1 ;
            if( 1<= number && number <= 5){
                console.log( "Start the game...")
                resolve(number)
            } else {
                    reject('Exit');
            }
        }, 2000)
})
fisrtPromise.then(response => {
        response === 1 ? console.log('Stay here') : console.log(`Go ${response} steps `)
    })
.catch(error => console.error(error))
.finally(() => console.log('Game over'));

// task 2

// let productList = ['potato', 'papper', 'cheese', 'meat', 'bread'];
let productList = ['potato', 'papper'];

function goToShop(productStore){
    return new Promise((resolve) => {
      resolve(productStore);
    });
}

// Сначала сделал так (функции потребители выглядят лучше чем во 2 варианте)

// const makeDiner = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         goToShop(productList)
//         .then(response => {
//             response.length >= 4 ? resolve('Bon Appetit') :
//             reject( () => {
//                     class ValidationError extends Error {
//                         constructor(message) {
//                         super(message); 
//                         this.name = "Product Error"; 
//                         }
//                     }
//                     return new ValidationError('Too low products');
//                 })
//             });
//    }, 3000);
// });

// makeDiner.then(response => console.log(response))
// .catch(err => console.error(err()));

// потом переделал так, как лучше теряюсь в догадках

class ValidationError extends Error {
    constructor(message) {
    super(message); 
    this.name = "Product Error"; 
    this.message = message;
    }
}

const makeDiner = new Promise((resolve) =>{
    setTimeout(() => {
        resolve('Bon appetit')
    }, 3000)
})

goToShop(productList)
    .then(response => {
            if (response.length < 4 ) {
                setTimeout(() => Promise.reject( new ValidationError('Too low products')), 3000)
            } else if (response.length >=4) {
                makeDiner.then(res => console.log(res))
            }
    })
    .catch(err => console.error(err))
    .finally(()=> {
        setTimeout(()=> console.log('Don`t be hungry :)'), 4000)
    });

// task 3

let div = document.createElement('div');
document.body.append(div);
div.classList.add('header');
let h2Creator = document.createElement('h2');
h2Creator.innerText = 'Filter by: ';
div.append(h2Creator);
let formCreator = document.createElement('form');
div.append(formCreator);
formCreator.classList.add('form-container');
for(let i=0; i<4; i++) {
    let formDiv = document.createElement('div');
    formDiv.classList.add('checkbox-container');
    let inputCreator = document.createElement('input');
    inputCreator.setAttribute('type', 'checkbox');
    let labelCreator = document.createElement('label');
    labelCreator.classList.add('checkbox');
    if(i == 0){
        inputCreator.setAttribute('id', 'male');
        labelCreator.setAttribute('for', 'male');
        labelCreator.innerText = 'Male';
    } else if( i == 1) {
        inputCreator.setAttribute('id', 'female');
        labelCreator.setAttribute('for', 'female');
        labelCreator.innerText = 'Female';
    } else if( i == 2) {
        inputCreator.setAttribute('id', 'alive');
        labelCreator.setAttribute('for', 'alive');
        labelCreator.innerText = 'Alive';
    } else if( i == 3) {
        inputCreator.setAttribute('id', 'dead');
        labelCreator.setAttribute('for', 'dead');
        labelCreator.innerText = 'Dead';
    }
    formCreator.append(formDiv);
    formDiv.append(inputCreator);
    formDiv.append(labelCreator);
}

let wrapper = document.createElement('div');
let characterInfo = null;
wrapper.classList.add('container');
document.body.append(wrapper)
let characterIdList = [1, 89, 135, 421, 400, 65, 77, 82, 87];

function drawCard(character) {
        let addStatus = "";
        if(character.status === "Dead") {
            addStatus = 'dead'
        } else {
            addStatus = ''
        }
        wrapper.innerHTML += `<div class="card">
        <div class="card-info">
            <div class="title">
                <h1>${character.name}</h1>
                <div class="status">
                    <div class="live-status ${addStatus}"></div>
                    <p>${character.status}</p>
                </div>
            </div>
            <div class="content">
                <p>${character.location.name}</p>
            </div>
        </div>
        <div class="card-image">
            <img src="https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg" alt="Img">
        </div>
    </div>`;
    return wrapper;
}

window.onload = function() {
   return fetch(`https://rickandmortyapi.com/api/character/${characterIdList}`)
    .then((response) => response.json())
    .then((data) => {
        characterInfo = Object.assign([], data);
        wrapper.innerHTML = '';
        characterInfo.forEach((character) => {
            drawCard(character)
        });
    })
}

let filterWrapper = document.querySelector('.form-container');
let box = document.querySelectorAll('label');

filterWrapper.addEventListener('click', function (e){
    box.forEach(label => {
        if(e.target.innerText === label.innerText) { 
            let status = ''
            if (label.innerText === 'Male' || label.innerText ==="Female") {
                status = 'gender'
            } else if (label.innerText === 'Alive' || label.innerText === 'Dead'){
                status = 'status'
            }
            let targetText = label.innerText;
            return fetch(`https://rickandmortyapi.com/api/character/?id=${characterIdList}&${status}=${targetText}`)
            .then((response) => response.json())
            .then((data) => {
                characterInfo = Object.assign([], data);
                wrapper.innerHTML = '';
                characterInfo.results.forEach((character) => {
                    drawCard(character)
                });
            })
        }
    })
});
