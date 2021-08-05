function Emploee(employee) {
   return Object.assign(this, employee);
}

let employeeObj = new Emploee(emplyeeArr[0]);

Emploee.prototype.getFullName = function(){
    return ` ${this.surname} ${this.name}`;
}

Emploee.prototype.makeString = function(){
    let infoString=[];
    for (key in this) {
            if(typeof(this[key]) == 'function') {
                continue;
            }
        infoString.push(` ${key} -  ${this[key]} `)
    }
  return infoString;
}

let createEmployesFromArr = (arr) => {
    let result = [];
    for(let i=0; i < arr.length; i++) {
        let elem = new Emploee(arr[i]);
        result.push(elem);
    }
    return result;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

const getFullNamesFromArr = (arr) => {
   let names = [];
   for(let i=0; i < arr.length; i++) {
       names.push(arr[i].getFullName())
   }
   return names;
}

const getMiddleSalary = (arr) => {
    let salary = 0;
    for(let i=0; i < arr.length; i++) {
        salary += arr[i].salary;
    }
    let middleSalary = Math.floor(salary / arr.length);
    return middleSalary;
}

const getRandomEmployee = (arr) => {
    let max = arr.length;
    let random = Math.floor(Math.random() * max);
    let infoString=[];
    console.log(arr[random]);
    for (key in arr[random]) {
            if(typeof(arr[random][key]) == 'function') {
               continue;
            }
            infoString.push(`${key}: ${arr[random][key]}`);
        }
    return infoString.join(', ');
}

Object.defineProperty(Emploee.prototype, "fullInfo",  {
    get() {
        let infoArr=[];
        for (key in this) {
            if(typeof(this[key]) == 'function') {
                continue;
             }
            infoArr.push(` ${key} -  ${this[key]}`)
        }
      return infoArr.join(', ');
    },
  
    set(value) {
        for (key in this) {
            for(change in value){
                if(key == change) this[key] = value[change]
            }
        }
    return this;
    }
});

document.write( 'Первое задание' + '<br>' + '<br>');
document.write("Инормация о работнике (свойства объекта со значениями) :" + employeeObj.makeString());
document.write('<br>' + '<br>' + 'Второе задание' + '<br>' + '<br>');
document.write(employeeObj.getFullName());
document.write('<br>' +'<br>' + 'Третье задание: созданый массив выведен в консоль' + '<br>' + '<br>');
console.log(emplyeeConstructArr);
document.write('Четвёртое задание' + '<br>' + '<br>');
document.write("Список работников: " + getFullNamesFromArr(emplyeeConstructArr));
document.write('<br>' +'<br>' + 'Пятое задание' + '<br>' + '<br>');
document.write("Средняя з/п: " + getMiddleSalary(emplyeeConstructArr));
document.write('<br>' +'<br>' + 'Шестое задание' + '<br>' + '<br>');
document.write("Счастливчик: " + getRandomEmployee(emplyeeConstructArr));
document.write('<br>' +'<br>' + 'Седьмое задание' + '<br>' + '<br>');
console.log(employeeObj);
document.write("До изменений: " + employeeObj.fullInfo +'<br>');
employeeObj.fullInfo = {name: 'Fedor', salary: 9000, email: 'dsgdg'};
document.write("С изменениями: " + employeeObj.fullInfo +'<br>');
console.log(employeeObj);
