// Le code secret : [blue, red, yellow, green]

// 1er tour : [blue, yellow, purple, red] -> [1,2] = 1 bien placé et bonne couleur et 2 mal placés mais bonne couleur

// 2eme : [blue, yellow, red, green] -> [2, 2] …

// Nous imposerons la combinaison à deviner. Elle doit être composée de 2 pions de couleurs différentes.

// Le joueur a donc 12 essais pour trouver la bonne combinaison.

// 4 choix de couleurs possibles.

// Vous devez écrire au moins 3 fonctions pour gérer :



// Si la proposition est bien composée uniquement des 4 couleurs possibles et rien d’autre
function verifiedNumberColors(playCode) {
    playCode = []

    for(let i = 0; i < playCode.length; i ++) {
        if(playCode.length <= 4) {
            return playCode
        } else {
            console.log("Il faut quatres couleurs")
        }
    }
}
// console.log(verifiedNumberColors(["green", "red", "yellow", "blue"]))

// vérifie que se sont bien les couleurs du tableau du jeu et non d'autres mots ou couleurs
function verifiedColors(playCode) {
    const arrayColors = ["red", "yellow", "blue", "orange", "green", "white", "purple", "pink" ]
    playCode = []
    for (const i of arrayColors) {
        if(playCode[i] === arrayColors[i]) {
            console.log(playCode)
            return true
        }
        for(const i of playCode) {
            if(playCode[i] === arrayColors[i]) {
                return true
            }
        }
        return playCode
    }
    console.log(playCode)
}

console.log(verifiedColors(["blue", "black", "yellow", "green"]))

// Une fonction qui retourne true ou false si la bonne combinaison est trouvée ou non
function goodCombination(playCode,secretCode) {
    secretCode = ["blue","red", "yellow", "green"]
    playCode = []

}

// Une fonction qui gère la partie (continuer tant que/fin si gagné)
function playGame(playcode) {

}
