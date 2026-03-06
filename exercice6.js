// Déclaration des variables
let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

// Utilisation de tableaux pour éviter de répéter le code
let variables = [nom, age, ville, score, actif];
let nomsVars = ["nom", "age", "ville", "score", "actif"];

// Partie A — Opérateur ??
console.log("Partie A — ??");
for (let i = 0; i < variables.length; i++) {
    let resultat = variables[i] ?? "valeur par défaut";
    console.log(`${nomsVars[i]} ?? "valeur par défaut"   -> ${resultat}`);
}

// Partie B — Opérateur ||
console.log("\nPartie B — ||");
for (let i = 0; i < variables.length; i++) {
    let resultat = variables[i] || "valeur par défaut";
    console.log(`${nomsVars[i]} || "valeur par défaut"   -> ${resultat}`);
}

// Partie C — Comparaison
console.log("\nPartie C — Comparaison");
for (let i = 0; i < variables.length; i++) {
    let res1 = variables[i] ?? "valeur par défaut";
    let res2 = variables[i] || "valeur par défaut";
    
    // Condition ternaire pour comparer les deux résultats
    let difference = (res1 === res2) ? "même résultat" : "résultat différent";
    console.log(`${nomsVars[i]} : ?? et || -> ${difference}`);
}