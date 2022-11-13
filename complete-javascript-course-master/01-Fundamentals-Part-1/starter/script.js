/*let js = "amazing";
console.log(40 + 8 + 23);*/
//coding challenge #1
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.44;
// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;
// console.log("BMI MARK", bmiMark, "BMI JOHN", bmiJohn);
// const markHigherBMI = bmiMark > bmiJohn;
// console.log("IS MARK BMI HIGHER", markHigherBMI)

// // coding challenge #2

// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI ${bmiMark} is higher than John's`)
// } else {
//     console.log(`John's BMI ${bmiJohn} is higher than Mark's`)
// }

// coding challenge #3
const avgScoreDolphins = (105 + 108 + 102) / 3;
const avgScoreKoalas = (109 + 95 + 123) / 3;
const minimumScore = 100;

if (avgScoreDolphins > minimumScore && avgScoreKoalas > minimumScore) {
    if ((avgScoreDolphins > avgScoreKoalas)) {
        console.log("Dolphins are the winner");
    } else if ((avgScoreDolphins < avgScoreKoalas)) {
        console.log("Koalas are the winner");
    } else if ((avgScoreDolphins === avgScoreKoalas)) {
        console.log("Match Draw");
    }
} else {
    console.log("No Winner")
}