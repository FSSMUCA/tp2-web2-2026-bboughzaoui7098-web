// Tableau contenant les nombres à tester
let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

// Parcourir le tableau
for (let i = 0; i < nombres.length; i++) {
    let val = nombres[i];
    let typeAffiche = "";

    // Vérification stricte des types selon les consignes
    if (Number.isNaN(val)) {
        typeAffiche = "INVALIDE";
    } else if (val === Infinity || val === -Infinity) {
        typeAffiche = "INFINI";
    } else if (val === 0 && (1 / val) === -Infinity) {
        // Astuce pour détecter le -0 (car 0 === -0 donne true)
        typeAffiche = "ZERO NEGATIF"; 
    } else if (Number.isSafeInteger(val)) {
        typeAffiche = "ENTIER SUR";
    } else if (Number.isInteger(val)) {
        typeAffiche = "ENTIER HORS LIMITES";
    } else {
        typeAffiche = "DECIMAL";
    }

    // Affichage dans le terminal (Template Literal convertit -0 en "0" automatiquement)
    console.log(`${val} -> ${typeAffiche}`);
}