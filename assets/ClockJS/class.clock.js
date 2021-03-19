class clocking {
    constructor() {
        this.date = new Date();
        this.hrs = this.date.getHours();
        this.mins = this.date.getMinutes();
        this.period = "AM";
    }

    getHours() {
        let word = '';
        let switchDayNight = document.getElementById();
        if (this.hrs >= 6 && this.hrs <= 17) {
            word = "Good Morning";
        } else if (this.hrs > 18 && this.hrs < 6) {
            word = "Good evening";
        }

    }
    UpdateHours() {
        this.date = new Date();
        this.hrs = this.date.getHours();
        this.mins = this.date.getMinutes();
    }
    display() {

        let time = `${this.hrs}:${this.mins}`;
        document.getElementById("clock").innerText = time;
        this.UpdateHours();


    }

}