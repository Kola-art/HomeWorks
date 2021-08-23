class Candidate {
    constructor(oneOfCandidates){
        Object.assign(this, oneOfCandidates)
    }
}
// task 1 
console.log("Задание 1");
const searchCandidatesByPhoneNumber = phone => {
    if(typeof(phone) != 'string') {
        throw new Error("Input is incorect, inspect input as string")
    }
    let replacer = new RegExp(/\D/g);
    let phoneCandidate = condidateArr.filter(candidate => {
            if(candidate.phone.replace(replacer, "").includes(phone.replace(replacer, ""))) {
                return (new Candidate(candidate));
            }
        });

    return (phoneCandidate.length > 0) ? phoneCandidate : "Incorect number";

}
console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82'))

// task 2 
console.log("Задание 2");

function getCandidateById(id) {

    let idCandidate = condidateArr.filter(candidate => {
        if(candidate._id == id) {
            let year = new Date(candidate.registered).getFullYear();
            let month = new Date(candidate.registered).getMonth() + 1;
            let day = new Date(candidate.registered).getDate();
            if (day < 10) day = `0${day}`;
            if (month < 10) month = `0${month}`;
            let updateDate = `${day}/${month}/${year}`;
            candidate.registered = updateDate;
            return candidate;
        }
    });
    return (idCandidate.length > 0) ? idCandidate : "Incorect ID";
} 
console.log(getCandidateById('5e216bc9f51c08c39c3ed006'));

// task 3
console.log("Задание 3");

const sortCandidatesArr = sortBy => {
    if(sortBy == 'asc') {
        return condidateArr.sort((a, b) => (a.balance > b.balance) ? 1 : -1);
        
    }
    else if(sortBy == 'desc') {
        return condidateArr.sort((a, b) => (b.balance > a.balance) ? 1 : -1)
    }
    else return condidateArr
}
// console.log(sortCandidatesArr('asc'));
// console.log(sortCandidatesArr('desc'));
console.log(sortCandidatesArr());

// task 4
console.log("Задание 4");

const getEyeColorMap = () => {
    let typeOfColor = new Set();

    condidateArr.forEach(item => {
        typeOfColor.add(item.eyeColor)
    });

    let objWithCandidates = {};
    for(color of typeOfColor) {
        objWithCandidates[color] = [];
    }

    condidateArr.forEach(item => {
        for(color of typeOfColor) {
            if(item.eyeColor == color) {
                objWithCandidates[color].push(new Candidate(item));
            }
        }
    });
    
    return objWithCandidates;
}
console.log(getEyeColorMap())