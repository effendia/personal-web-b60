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
    const succes = false;
    return new Promise((resolve, reject) => {
        if(succes) {
    setTimeout(() => {
        console.log("proses 1 berhasil");
        resolve();
    },2000);
}else {
    console.log("proses 1 gagal");
    reject();
}
});
}

function prosses2 () {
    const succes = false;
    return new Promise((resolve, reject) => {
        if(succes) {
    setTimeout(() => {
        console.log("proses 2 berhasil");
        resolve();
    },2000);
}else {
    console.log("proses 2 gagal");
    reject();
}
});
}
function prosses3 () {
    const succes = false;
    return new Promise((resolve, reject) => {
        if(succes) {
    setTimeout(() => {
        console.log("proses 3 berhasil");
        resolve();
    },2000);
}else {
    console.log("proses 3 gagal");
    reject();
}
});
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




// asynchrognous
async function multipleProcess() {
     try {
    await prosses1();
    await prosses2();
    await prosses3();
     } catch (error) {
        console.log('ada proses yang gagal')
     }
    
    
}

multipleProcess() ; 