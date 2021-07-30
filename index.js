console.log("Задание 1");

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
let result = [];
for(let cities in citiesAndCountries) {
    result.push(cities + " - это " + citiesAndCountries[cities]);
}
console.log(result);

console.log("Задание 2");

function getArray(amount){
    let arr = [];
    let k = 1;
    arr.length = amount / 3;
    for(let i = 0; i < arr.length; i++) {
        arr[i] = [];
        for(let j =1; j <= 3; j++) {
            arr[i].push(k);
            k++;
        }
    }
    return arr;
}
console.log(getArray(12));

console.log("Задание 3");

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Субота' , 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}
function getNameOfDay(lang, day){
    return namesOfDays[lang][day-1];
}
console.log(getNameOfDay('ru', 1));

console.log("Задание 4");

 function SummaryOfMin(arr) {
    arr.sort((el1, el2) => {
    if(el1 == el2)
        return 0;
    else if(el1 > el2)
        return 1;
    else if(el1 < el2)
        return -1;
    });
    let result = arr[0] + arr[1];
    return result;
 }
console.log(SummaryOfMin([10, 800, 3453000, 8010]));

console.log('Задание 5');

function toDigit(binary) {
    let binaryStr = '';
    for(let i = 0; i < binary.length; i++ ){
        if(binary[i] == 1) binaryStr +=1;
        else binaryStr +=0;
    }
    let digit = parseInt(binaryStr, 2);
    return digit;
}
console.log(toDigit([1, 0, 1, 0, 1]));