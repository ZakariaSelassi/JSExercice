let clocker = new clocking();
setInterval(() => {
    clocker.display();
}, 1000);
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