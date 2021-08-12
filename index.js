// task 1
console.log('Задание 1');
class Student {
    constructor(enrollee){
        this.id = Student.getId();
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;
        this.listOfStudents = Student.listOfStudents.push(this);
        this.isSelfPayment = Student.payment();
    }
    static id = 1;
    static getId() {
        return this.id++
    }
    static  listOfStudents = [];
    
    static payment() {
               
        this.listOfStudents.sort((a, b) => (a.ratingPoint > b.ratingPoint) ? 1 : (a.ratingPoint === b.ratingPoint) ? ((a.schoolPoint > b.schoolPoint) ? 1 : -1) : -1 ).reverse();
    
        if(this.listOfStudents.length <= 5) {
            for(let i=0; i < this.listOfStudents.length; i++) {
                if(this.listOfStudents[i].ratingPoint >= 800) this.listOfStudents[i].isSelfPayment = false;
                else  this.listOfStudents[i].isSelfPayment = true;
            }
        } else if (this.listOfStudents.length > 5) {
                for(let i=0; i < 5; i++) {
                    if(this.listOfStudents[i].ratingPoint >= 800) this.listOfStudents[i].isSelfPayment = false;
                    else this.listOfStudents[i].isSelfPayment = true;
                }
                for(let j = 5; j < this.listOfStudents.length; j++) {
                    this.listOfStudents[j].isSelfPayment = true;
                }
            } 

            let lastElement;
            for(let i=0; i < this.listOfStudents.length; i++) {
                if(this.listOfStudents[i].id == this.listOfStudents.length) lastElement = this.listOfStudents[i].isSelfPayment;
            }
            return lastElement;
    }
    
}

new Student(studentArr[4]);
new Student(studentArr[0]);
new Student(studentArr[1]);
new Student(studentArr[2]);
new Student(studentArr[5]);
new Student(studentArr[3]);
new Student(studentArr[6]);
new Student(studentArr[8]);
new Student(studentArr[7]);
console.log(Student.listOfStudents);


// task 2
console.log('Задание 2');
class CustomString {
    constructor(){}

    reverse(textReverse) {
        let reversedText= '';
        if(typeof(textReverse) != 'string') throw new Error("It must be string");
        for(let i = textReverse.length - 1 ; i >= 0; i-- ){
            reversedText += textReverse[i];
        }
        return reversedText;
    }

    ucFirst(upWord) {
        if(typeof(upWord) != 'string') throw new Error("It must be string");
        let upLetter = upWord[0].toUpperCase();
        for(let i=0; i < upWord.length; i++) {
           if (i == 0) continue;
            upLetter += upWord[i];
        }
        return upLetter; 
    }

    ucWords(upLetters) {
        if(typeof(upLetters) != 'string') throw new Error("It must be string");
        let k = 0;
        for(let i=0; i < upLetters.length; i++) {
            if(upLetters[i] == ' '){
                k = i + 1;
            }
            upLetters = upLetters.replace(upLetters[k], upLetters[k].toUpperCase())
        }
        return upLetters;
    }
}

let myString = new CustomString();
console.log(myString.reverse('qwerty'));
console.log(myString. ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));

// task 3
console.log('Задание 3');
class Validator {
    constructor() {}

    checkIsEmail(emailAdress) {
        let regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i ;
        if(regExp.test(emailAdress)) return true;
        else throw new Error("Invalid email address");
    }
    checkIsDomain(address) {
        let regExp =/^[\w-\.]+\.[\w-\.]{2,6}$/i
        if(regExp.test(address)) return true;
        else throw new Error("Invalid domain");
    }
    checkIsDate(dateStr) {
        let regExp = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
        if (regExp.test(dateStr) ) return true;
        else throw new Error("Invalid date");
    }
   
    checkIsPhone(phoneNumber) {
        let regExp = /^\+38\ (\(?\d{3}\)?[\- ]?)?[\d\- ]{7,9}$/ ;
        if(regExp.test(phoneNumber)) return true;
        else throw new Error("Invalid phone number");
    }
}

let validator = new Validator();
console.log(validator.checkIsEmail("vasya.pupkin@gmail.coms"));
console.log(validator.checkIsDomain('google.com.ua'));
console.log(validator.checkIsDate('30.11.2019'));
console.log(validator.checkIsPhone('+38 (066) 937-92-92'));