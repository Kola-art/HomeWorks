function Emploee(employee) {
    this.obj = Object.assign( {}, employee);
    Object.defineProperty(this, "fullInfo",  {
        get() {
            let infoArr=[];
            for (key in this.obj) {
                infoArr.push(` ${key} -  ${this.obj[key]}`)
            }
          return infoArr;
        },
      
        set(value) {
            for (key in this.obj) {
                for(change in value){
                    if(key == change) this.obj[key] = value[change]
                }
            }
        return this.obj;
        }
      });
   
}
let employeeObj = new Emploee(emplyeeArr[0]);

Emploee.prototype.getFullName = function(){
    return `${this.obj.surname} ${this.obj.name}`;
}

Emploee.prototype.makeString = function(){
    let infoString=[];
    for (key in this.obj) {
        infoString.push(` ${key} -  ${this.obj[key]}`)
    }
  return infoString;
}

let employForArray = new Emploee(emplyeeArr);

let createEmployesFromObj = (obj) => {
    let result = [];
    for(key in obj){
        if(typeof(obj[key]) == 'object'){
            for(a in obj[key]) {
            result.push(obj[key][a]);
            }
        }
    }
    return result;
};
const emplyeeConstructArr = createEmployesFromObj(employForArray);

const getFullNamesFromArr = (arr) => {
   let names = [];
   for(let i=0; i < arr.length; i++) {
       names.push( " " + arr[i].name + " " + arr[i].surname )
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
    let random = Math.floor(Math.random() * 11);
    let infoString=[];
    for (key in arr[random]) {
        infoString.push(` ${key} -  ${arr[random][key]}`);
    }
    return infoString;
}


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
console.log(employeeObj.obj);
document.write("До изменений: " + employeeObj.fullInfo +'<br>');
employeeObj.fullInfo = {name: 'Fedor', salary: 9000, email: 'dsgdg'};
document.write("С изменениями: " + employeeObj.fullInfo +'<br>');
console.log(employeeObj.obj);
