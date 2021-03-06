let gradeCalculator = function (studentScore, total) {
    if (typeof studentScore === 'number' && typeof total === 'number') {
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
    else {
        throw Error('The argument passed is not a number');
    }
    

}

try {
    console.log(gradeCalculator(20, 30));
}
catch (e) {
    console.log('catch block is running');
}
