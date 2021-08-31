// task 1
console.log("задание 1");
const arr = ['Vasya', 'Petya', 'Alexey']

function removeUser(arr, index) {
    arr.splice(index, 1);
    return arr;
}
removeUser(arr, 1);

console.log(arr);
// task 2
console.log("задание 2");

const obj = { name: 'Vasya', age: 1}

function getAllKeys(obj) {
  return Object.keys(obj);
}

console.log(getAllKeys(obj));
// task 3
console.log("задание 3");

function getAllValues(obj) {
    return Object.values(obj);
}

console.log(getAllValues(obj));
// task 4
console.log("задание 4");
const objForArray = {
    id: 3,
    name: 'Vasya'
}

function insertIntoarr(element, id) {
    let idx = null;
    
    condidateArr.forEach(function(item, index){
        if(condidateArr[index]._id === id) idx = index;
    })

    if (idx) condidateArr.splice(idx, 0, element);
    return (idx == null) ? "Id is not correct" : condidateArr;
}

console.log(insertIntoarr(objForArray, "5e216bc9cab1bd9dbae2567"));
console.log(insertIntoarr(objForArray, '5e216bc9cab1bd9dbae25637'));
// console.log(condidateArr);

// task 5 
console.log("задание 5");
class Condidate {
    constructor(oneOfCondidates) {
        Object.assign(this, oneOfCondidates )
    }
    get state() {
        let fullAdress = '';
            for( this.key in this) {
                if (this.key == "address") fullAdress = this[this.key];
            }
        let state = fullAdress.split(',').slice(2, 3);
        return (state == "") ? 'candidate without address' : state;
    }
}

let condidate = new Condidate(condidateArr[0]);
console.log("Штат нашего кандидата: " + condidate.state);


// task 6
console.log("задание 6");

function getCompanyNames() {
    let set = new Set();
    condidateArr.forEach(function(item, index){
        if(condidateArr[index].company) set.add(condidateArr[index].company)
    })
    return Array.from(set);
}
console.log(getCompanyNames())

// task 7
console.log("задание 7");

    function getUsersByYear(year) {
        
        let arrId = [];
        condidateArr.forEach(function(item, index){
            if(new Date(item.registered).getFullYear() == year) arrId.push(condidateArr[index]._id)
        })
        return arrId;
    }
   console.log(getUsersByYear(2017))

// task 8
console.log("задание 8");

function getCondidatesByUnreadMsg(countOFUnreadMsg) {
    let arrOfCondidat = [];
        condidateArr.forEach(function(item, index){
            if(condidateArr[index].greeting) {
               let str = condidateArr[index].greeting.split(' ');
                for (let i=0; i <str.length; i++) {
                     if (str[i] == countOFUnreadMsg) arrOfCondidat.push(new Condidate(condidateArr[index]))
                }
            }
       
        })
        return arrOfCondidat;
}
console.log(getCondidatesByUnreadMsg(1))

// task 9
console.log("задание 9");

function getCondidatesByGender(gender) {
    let genderArr =  condidateArr.filter(item => item.gender === gender)
        
    if( gender == 'male' || gender == 'female'){
        return genderArr;
    }
    else return 'Интересный вариант';
}
console.log(getCondidatesByGender('female'));

// task 10 
console.log("задание 10");

function join(arr, sep = '') {
    var result = "";
    for (let i = 0; i < arr.length-1; i++) {
          result += arr[i];
          result += sep;
    }
    result += arr[arr.length - 1];
    return result;
};

let arrForJoin = ['first', 'second', 'third'];
console.log(join(arrForJoin, '~'));


function reduce(array,callback,initialValue){
    let sum = initialValue;
    for(let i = 0; i < array.length; i++){
        sum = callback(sum,array[i]);
    }
    return sum;
}  

function sumForReduce(total, number) {
    return total + number;
}

console.log(reduce([1, 2, 3], sumForReduce, 4));