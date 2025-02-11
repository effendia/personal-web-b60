//  // forEach
//  let numbers =[1,2,3,4,5,6,7,8,9,10];

// // // function showNumber(number) {
// // //     // 1.number *= 2
// // //     // console.log(number);
// // //     // cara lain 
// // //     //2. console.log(`sekarang nomor ${number * 2}`);
// // // }

// let result = 0;

// function showNumber(number) {
//     console.log(`sekarang number`);

//     result *= number;
// }
//     numbers.forEach(showNumber);

//     console.log(result);

//     let doubleNumbers = [];

//     numbers.forEach((number) => {
//      doubleNumbers.push(number * 2)
//     })

//     console.log(doubleNumbers);
    
// numbers.forEach(showNumber);

// MAP 

// number.map(showNumber);

// console.log(numbers);

// 3. FILTER
// const candidates = [
// {
//     name: "A",
//     score: 70,
//     expectedSalary: 500,
//     prefferedPosition:"Fulstack",
// },
// {
//     name: "B",
//     score: 40,
//     expectedSalary: 200,
//     prefferedPosition:"Fulstack",
// },
// {
//     name: "C",
//     score: 90,
//     expectedSalary: 1500,
//     prefferedPosition:"Baeckend",
// },
// {
//     name: "D",
//     score: 80,
//     expectedSalary: 700,
//     prefferedPosition:"Fulstack",
// },
// ];

// const criteria = {
// score : 70,
// expectedSalary: 1000,
// prefferedPosition:"Fulstack",
// }
// const passCandidates = candidates.filter((candidate) => {
//     if (
//         candidate.score >= criteria.score &&
//         candidate.expectedSalary<= criteria.expectedSalary && 
//         candidate.prefferedPosition === criteria.prefferedPosition
//     )
//         return true;
//     return false;
// });

// console.log(passCandidates);

// reduse
// const sum = numbers.reduse((prev, curr) => { ini
// console,log("prev :",prev);
// console,log("curr :", curr);
// console,log("prev + curr =", prev + curr);
// return prev = curr;
// });
 
// console.log(sum);