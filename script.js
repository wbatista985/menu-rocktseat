// pega todo modal e cards
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
//clicando no card da rocketseat abre a pagina do curso

for (let card of cards) {
    const imagenId = card.getAttribute("id");
    card.addEventListener("click", function () {
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${imagenId}`
    })
}

document.querySelector(".modal-maximize").addEventListener("click", () => {
    if( modal.classList.contains('maximize')) {
        modal.classList.remove('maximize');
    }else{
        modal.classList.add("maximize")
    } 
});

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = ""
    // window.onload = function() {
    //     let modalMaximize = modal.classList.contains("modal-maximize");
    //     if(modalMaximize) {
    //         console.log(modalMaximize);
    //         modal.classList.remove('modal-maximize');
    //     }      
    // }
})
// remove o site e fecha