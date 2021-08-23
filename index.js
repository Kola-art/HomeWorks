// task 1
console.log("Задание 1")
function counterFunc(a) {
    let counter = 0;
    return function (a){
        return counter += a;
    };
}
let counter = counterFunc();

console.log(counter(10));
console.log(counter(20));
console.log(counter(30));

//  task 2
console.log("Задание 2")
function arrayFunc(elem) {
    let arr = [];
    return function (elem){
            if( elem == undefined || elem == null) arr = []
            else  arr.push(elem);
            return arr;
    };
}
let getUpdatedArr = arrayFunc();
console.log(getUpdatedArr(101));
// console.log(getUpdatedArr(202));
// console.log(getUpdatedArr({name: 'Vasya'}));
// console.log(getUpdatedArr());
// console.log(getUpdatedArr(4));

// task 3
console.log('Задание 3')

let diference = function() {
    let count = 0;
    let firstCall;
    let interval;
    return () => {
        count++;
        if (count == 1) {
            firstCall = Date.now();
            return 'Enabled';
        }
        let lastCall = Date.now();
        interval =  Math.round((lastCall - firstCall) / 1000);
        firstCall = lastCall;
        return interval;
      };
    
};

let getTime = diference()

console.log(getTime());
// console.log(getTime());
// console.log(getTime());



// task 4
console.log('Задание 4');

const timer = (time) => { 
    let timerID = setInterval(function () {
        seconds = time % 60;
        minutes = Math.floor(time/60);
        if (time <= 0) {
            clearInterval(timerID);
            console.log("Time end");
        } else { 
            let strTimer = `${minutes}:${seconds}`;
            if(minutes < 10) {
                strTimer = `0${minutes}:${seconds}`;
            }
            if(seconds < 10) {
                strTimer = `${minutes}:0${seconds}`;
            }
            if(seconds < 10 && minutes < 10) {
                strTimer = `0${minutes}:0${seconds}`;
            }
            console.log(strTimer);
        }
        --time; 
    }, 1000)
}

// timer(4);
