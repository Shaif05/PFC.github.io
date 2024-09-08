function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

function closePopup() {
    const popups = document.getElementsByClassName("popup");
    for (let i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
    }
}

// Ajout d'un écouteur d'événement pour fermer le popup quand on clique en dehors du contenu
const popups = document.getElementsByClassName("popup");
for (let i = 0; i < popups.length; i++) {
    popups[i].addEventListener("click", function(e) {
        if (e.target === popups[i]) {
            closePopup();
        }
    });
}
