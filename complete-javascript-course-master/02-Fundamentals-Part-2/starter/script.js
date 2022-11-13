
//coding challenge 1
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const avgDolhins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// function checkWinner(avgDolhins, avgKoalas) {
//     if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`koalas win (${avgKoalas} vs ${avgDolhins})`);
//     } else if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolhins win (${avgDolhins} vs ${avgKoalas})`);
//     } else {
//         console.log('No team wins..');
//     }
// }
// checkWinner(576, 111);

// // coding challenge 2
// const bills = [125, 555, 44];
// const calctip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 :
//         bill * 0.2
// }
// const tip = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
// console.log(bills, tip)

// coding Challenge 3
// const Mark = {
//     fullname: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }

// }
// const John = {
//     fullname: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// }
// Mark.calcBMI()
// John.calcBMI()
// console.log(`John's BMI(${John.bmi}) is higher than Mark's(${Mark.bmi}) `);
// if (Mark.bmi > John.bmi) {
//     console.log(`${Mark.fullname}'s BMI(${Mark.bmi}) is higher than ${John.fullname}'s BMI(${John.bmi})`)
// } else if (John.bmi > Mark.bmi) {
//     console.log(`${Mark.fullname}'s BMI (${Mark.bmi}) is higher than ${John.fullname}'s BMI(${John.bmi})`)
// }

// coding challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calctip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2
}
for (let i = 0; i <= bills.length; i++) {
    const tip = calctip(bills[i]);
    tips.push(tip)
    totals.push(tips[i] + bills[i]);
}
console.log(tips, totals)
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum / arr.length;
}
console.log(calcAverage(tips));
console.log(calcAverage(totals));