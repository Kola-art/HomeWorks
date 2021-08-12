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
console.log(getUpdatedArr(202));
console.log(getUpdatedArr({name: 'Vasya'}));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));

