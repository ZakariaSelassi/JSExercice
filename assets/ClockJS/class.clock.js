class clocking {
    constructor() {
        this.date = new Date();
        this.hrs = this.date.getHours();
        this.mins = this.date.getMinutes();
        this.second = this.date.getSeconds();
        this.period = "AM";
    }

    getHours() {
        if (this.hrs == 0) {
            this.hrs = 12;
        } else if (this.hrs >= 12) {
            this.hrs = this.hrs - 12;
            this.period = "PM";
        }
        this.hrs = this.hrs < 10 ? "0" + this.hrs : this.hrs;
        this.mins = this.mins < 10 ? "0" + this.mins : this.mins;
        this.second = this.second < 10 ? "0" + this.second : this.second;
    }
    UpdateHours() {
        this.date = new Date();
        this.hrs = this.date.getHours();
        this.mins = this.date.getMinutes();
        this.second = this.date.getSeconds();
        this.period = "AM";
    }
    display() {

        let time = `${this.hrs}:${this.mins}:${this.second} ${this.period}`;
        document.getElementById("clock").innerText = time;
        this.UpdateHours();


    }

}