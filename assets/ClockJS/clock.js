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
        icon.src = './img/icon-moon.svg';
        icon.setAttribute("alt", "moon");
        document.body.style.backgroundImage = "url('./img/bg-image-nighttime.jpg')";
        document.getElementById("timeSentence").innerHTML = `${message}, It's currently`;
    }

    // Fixe 0 missing before 10.
    minuts = minuts < 10 ? "0" + minuts : minuts;
    hours = hours < 10 ? "0" + hours : hours;
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

let getGMT = () => {
    fetch('https://worldtimeapi.org/api/ip')
        .then(result => {
            if (result.ok) {
                result.json().then(data => {
                    console.log(data);
                });
            } else {
                console.log("error");
            }
        })
}
getGMT();
getLocation();
timer();
getSentence();
document.getElementById('refresh').addEventListener('click', getSentence);