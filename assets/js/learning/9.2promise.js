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