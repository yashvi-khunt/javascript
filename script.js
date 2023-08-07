'use strict';
//coding challenge 1 
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//test data 2 : dolphins- 85,54,41, koalas - 23,34,27
//test 1
const avgDolphins = calcAverage(44,23,71);
const avgKoalas = calcAverage(65,54,49);

const cc1 = () => checkWinner(avgDolphins,avgKoalas)

function checkWinner(avgDolphins,avgKoalas){
    //wins if avg score is double than other
    if(avgDolphins >= avgKoalas*2){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= avgDolphins*2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
        console.log("No team wins");
    }
}
// coding challenge 1

//coding challenge 2
const bills = [125,555,44];
let totals = new Array();
let tips = new Array();

const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    tips.push(tip);
    totals.push(bill+tip);
}
function cc2(){
    // for(let i = 0; i<bills.length; i++){
    //     calcTip(bills[i]);
    // }
    bills.forEach(bill => calcTip(bill) )
       
    console.log(bills)
    console.log(tips)
    console.log(totals)
}
//coding challenge 3
const mark = {
    firstName: "Mark",
    lastName: "Miller",
    weigth: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.weigth / this.height**2;
        return this.bmi;
    }
}

const john = {
    firstName: "John",
    lastName: "Smith",
    weigth: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.weigth / this.height**2;
        return this.bmi
    }
}

const cc3 = () => {
    mark.calcBMI()
    john.calcBMI();
    if(mark.bmi > john.bmi){
        console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi})`);
    }else{
        console.log(`${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmi})`);
    }

}