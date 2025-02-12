function prosses1 () {
    const succes = true;
    return new Promise((resolve, reject) => {
        if(succes) {
    setTimeout(() => {
        console.log("proses 1 berhasil");
        resolve();
    },5000);
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
function prosess3 () {
    const succes = true;
    return new Promise((resolve, reject) => {
         if(succes) {
   setTimeout(() => {
    console.log("proses 3 berhasil");
    resolve();
    },3000);
}else {
   console.log("proses 3 gagal");
    reject();
}
});
}
 
function multipleProcess()  {
    prosses1()
      .then(() => prosses2()) 
      .then(() =>  prosses3()). catch(() =>{
        console.log("ada proses yang gagal");
      })
}

multipleProcess();