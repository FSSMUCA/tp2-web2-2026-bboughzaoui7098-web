// Tableaux contenant les paires de valeurs à tester
let val1 = [0, 0, 0, "", null, null, NaN, 1, " \t\n "];
let val2 = ["", "0", false, false, undefined, false, NaN, "1", 0];

// Textes exacts pour l'affichage dans la console
let text1 = ["0", "0", "0", '""', "null", "null", "NaN", "1", '" \\t\\n "'];
let text2 = ['""', '"0"', "false", "false", "undefined", "false", "NaN", '"1"', "0"];

let differences = 0; // Compteur des différences

// Boucle pour tester chaque paire
for (let i = 0; i < val1.length; i++) {
    let egalSimple = (val1[i] == val2[i]);
    let egalStrict = (val1[i] === val2[i]);

    // Incrémenter si les résultats sont différents
    if (egalSimple !== egalStrict) {
        differences++;
    }

    // Affichage formaté
    console.log(`${text1[i]} == ${text2[i]}   -> ${egalSimple}   |   ${text1[i]} === ${text2[i]}   -> ${egalStrict}`);
}

// Affichage de la conclusion dynamique
console.log("---");
console.log(`${differences} paire(s) où == et === donnent des résultats différents`);