// synchronous
//  console.log("start");  //awal proses

//  function getData() {
//     const data = "data berhasil di ambil";
//     return data;
//  }

//  const result = getData();
//  console.log(result);
console.log("start");

//  funstion getData() {
//     const data ="data berhasil di ambil";
//     console.log(data);
//  }

//  function fetcDataWithTime() {
//     setTimeout(getData, 2000);  //    2 * 1000ms => 2 detik
//  }

//  fetcDataWithTime();

//  console.log("End")

//  function sayEnd() {
//     setTimeout(() => {
//         console.log("End");
//     }, 5000);  //  5 - 2 = 3
// }

// function greeting(name, callback) {
//     setTimeout(() => {
//         console.log("My name is,name");
//     },2000);
//     callback();
// }

// greeting("amel", sayEnd)
//  console.log("End");  //  akhir proses

//  setTimeout

//  

// callback problem

function prosses1 () {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log("proses 1");
        resolve();
    },5000);
});
}
function prosses2 () {
    setTimeout(() => {
        console.log("proses 2");
    },2000);
}
function prosses3 () {
    setTimeout(() => {
        console.log("proses 3");
    },3000);
}

// callback hell
// setTimeout(() => {
//     prosses1();
//     setTimeout(() => {
//         prosses2();
//         setTimeout3(()=> {
//             prosess3();
//         }, 3000);
//     },2000)
// },5000);




// asynchrgnous
async function multiProcess() {
    await prosses1();
    await prosses2();
    await prosses3();
    
}

multiProcess() 