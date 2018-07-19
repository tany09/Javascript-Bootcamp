let gradeCalculator = function (studentScore, total) {
    let grade = '';
    let percent = (studentScore / total) * 100;
    if (percent >= 90){
        grade = 'A';
        return `You got an ${grade}`;
    }
    
    else if (percent >= 80) {
        grade = 'B';
        return `You got a ${grade}`;
    }

    else if (percent >= 70) {
        grade = 'C';
        return `You got a ${grade}`;
    }

    else if (percent >= 60) {
        grade = 'D';
        return `You got a ${grade}`;
    }

    else if (percent >= 50) {
        grade = 'E';
        return `You got a ${grade}`;
    }

    else {
        grade ='F';
        return `You got an ${grade}`

    }
}
console.log(gradeCalculator(20,30));