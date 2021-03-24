let timer = () => {
    let time = new Date();
    let hours = time.getHours();
    let minuts = time.getMinutes();
    let formatHours = "AM";
    let message = '';
    let icon = document.querySelector('img');
    if (hours >= 0 && hours < 12) {
        message = 'Good Morning';
        document.getElementById("timeSentence").innerHTML = `${message}, It's currently`;
    } else if (hours >= 12 && hours < 18) {
        message = 'Good afternoon';
        document.getElementById("timeSentence").innerHTML = `${message}, It's currently`;
    } else {
        message = 'Good evening';
        icon.src = './assets/img/icon-moon.svg';
        icon.setAttribute("alt", "moon");
        document.body.style.backgroundImage = "url('./assets/img/bg-image-nighttime.jpg')";
        document.getElementById("timeSentence").innerHTML = `${message}, It's currently`;
    }

    // Fixe 0 missing before 10.
    minuts = minuts < 10 ? "0" + minuts : minuts;

    // AM or PM

    if (hours > 12) {
        hours -= 12;
        formatHours = "PM";
    }
    if (hours == 0) {
        hours = 12;
        formatHours = "AM";
    }

    let timer = `${hours} :${minuts}  ${formatHours}`;
    document.getElementById("clock").innerHTML = timer;
    setTimeout(timer, 1000);
}

const quote = document.getElementById("sentence");
let getSentence = () => {
    fetch('https://api.quotable.io/random')
        .then(result => {
            if (result.ok) {
                result.json().then(data => {
                    quote.innerHTML = data.content;

                });
            } else {
                console.log("error");
            }
        })
}

let loca = document.getElementById("location");
let getLocation = () => {
    fetch('http://ip-api.com/json/?fields=61439')
        .then(result => {
            if (result.ok) {
                result.json().then(data => {
                    loca.innerHTML = `In ${data.city}, ${data.countryCode}`;

                });
            } else {
                console.log("error");
            }
        })
}
let current = document.querySelector(".currentTime");
let dayWeek = document.querySelector(".currentWeek");
let dYear = document.querySelector(".currentYear");
let nWeek = document.querySelector(".currentNumber");
let getGMT = () => {
    fetch('https://worldtimeapi.org/api/ip')
        .then(result => {
            if (result.ok) {
                result.json().then(data => {
                    console.log(data);
                    current.innerHTML = data.timezone;
                    dayWeek.innerHTML = data.day_of_week;
                    dYear.innerHTML = data.day_of_year;
                    nWeek.innerHTML = data.week_number;

                });
            } else {
                console.log("error");
            }
        })
}
let show = () => {
    let det = document.querySelector(".details").classList.toggle('transform');
    document.querySelector('.firstContainer').classList.toggle('transform');
    document.querySelector('.secondContainer').classList.toggle('transform2');
    document.getElementById("sentence").classList.toggle('textHide');
    document.getElementById("refresh").classList.toggle('textHide');
    let btn = document.querySelector('.show');
    if (btn.firstChild.nodeValue === "MORE") {
        btn.firstChild.nodeValue = "LESS";
        console.log(btn.firstChild.nodeValue);
    } else {
        btn.firstChild.nodeValue = "MORE";
    }
}

getGMT();
getLocation();
timer();
getSentence();

document.getElementById('refresh').addEventListener('click', getSentence);
document.querySelector(".show").addEventListener("click", show);