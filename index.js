console.log("Задание 1");

for(let i = 1; i <= 10; i++){
    if(i % 3 == 0) {
        console.log("FizBuz");
    }
    else if (i % 2 == 0) {
        console.log("Fiz");
    }
    else console.log("Buz");
}

console.log('Задание 2');

let result = 1;
function factorial(n){
    result *= n;
    if (n == 1) {
        return;
    }
    else factorial(n - 1)
    return result;
}
console.log("Факториал заданного числа: " + factorial(10));

console.log('Задание 3');

function paperPackCount(weeks) {
    const sheetsInReamPaper = 500;
    const consumptionPerWeek = 1200;
    let summaryPapperNeed = consumptionPerWeek * weeks;
    let remainder = summaryPapperNeed % sheetsInReamPaper;
    let packCount = 0;
    if (remainder == 0) {
        packCount = summaryPapperNeed  / sheetsInReamPaper;
    }
    else packCount = (summaryPapperNeed - remainder) / sheetsInReamPaper + 1;
    return packCount;
}
console.log("Наименьшее количество пачек бумаги которое нужно купить в офис: " + paperPackCount(8));

console.log("Задание 4");
let roomNumber = prompt("Введите номер квартиры");
function roomPosition(roomNumber) {
    const roomsOnFloor = 3;
    const floors = 9;
    let roomsInPorch = roomsOnFloor * floors;
    let porchReminder = roomNumber % roomsInPorch;
    let floorReminder = porchReminder % roomsOnFloor;
    let porch;
    let floor;
    if(roomNumber <= 26 ) {
        porch = 1;
        if (floorReminder == 0 ) {
            floor = porchReminder / roomsOnFloor;
        }
        else floor = (porchReminder - floorReminder) / roomsOnFloor + 1 ;           
    } else if (porchReminder == 0 ) {
        porch = roomNumber  / roomsInPorch;
        floor = (roomNumber / porch) / roomsOnFloor;
    } else if (floorReminder == 0 ) {
        porch = (roomNumber - porchReminder)  / roomsInPorch + 1;
        floor = porchReminder / roomsOnFloor;
    } else {
        porch = (roomNumber - porchReminder)  / roomsInPorch + 1;
        floor = (porchReminder - floorReminder) / roomsOnFloor + 1;
    }

  return console.log(`Квартира под номером ${roomNumber} находиться в ${porch} подъезде на ${floor} этаже`);
}
roomPosition(roomNumber);

console.log("Задание 5");

    let medianNumber = prompt("Введите количество строк для пирамиды");
    medianNumber= Number(medianNumber);
    let strWide = medianNumber * 2;
    let output ="";
    for(let i=0; i < medianNumber; i++) {
        for(let j=1; j < strWide; j++){
            if (j >= medianNumber - i && j <= medianNumber + i) {
                output += '#';
            } else output += '-';
        }
        output += "\n"
    }
    console.log(output);