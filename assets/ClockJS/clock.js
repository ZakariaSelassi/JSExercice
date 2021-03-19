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
}
timer();
const quote = document.getElementById("sentence");
let getSentence = () => {
    fetch('https://api.quotable.io/random')
        .then(result => {
            if (result.ok) {
                result.json().then(data => {
                    quote.innerHTML = data.content;
                    console.log(data);
                });
            } else {
                console.log("error");
            }
        })
}
getSentence();
document.getElementById('refresh').addEventListener('click', getSentence);