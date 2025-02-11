class Phone {
    battery = 0;
    screen = 0;
    signal = 0;

    constructor(name= "") {
        this.name = name;
    }

    connectWifi() {
        console.log("this phone has signal :", this.signal);
        console.log("this phone has battery :", this.battery);
        if(this.signal > 50 && this.battery > 20) {
            console.log("success connect");
        }else {
            console.log("failed connect");
        }
    }

    successConnect() {
        console.log("success connect")
    }

    failedConnect() {
        console.log("failed to connect")
    }

}
const iphone =new Phone("Iphone 15");
iphone.signal = 30;
iphone.battery =80;

iphone.connectWifi();
