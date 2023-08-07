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

function cc2(){
    console.log("cc2")
}