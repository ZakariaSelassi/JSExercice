const panels = document.querySelectorAll('.panel')
console.log(panels);
// On parcours chaque element de class panel
panels.forEach((panel) => {
    // Pour chaque element panel on applique un event listner 
    panel.addEventListener("click", () => {
        //  Ajoute une class active à tout les elements
        removeActiveClass();
        panel.classList.add('active')
    })
});

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}


/*    var urlQuotes = 'https://programming-quotes-api.herokuapp.com/quotes/random/lang/en'
    var urlFreeGoIp = 'https://freegeoip.app/json/';
    var urlWorldTimeApi = 'https://worldtimeapi.org/api/ip'; */