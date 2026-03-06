// Données reçues
let nom = "  Fatima  ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

// Traitement du nom (suppression des espaces)
let nomNettoye = nom.trim();
if (nomNettoye === "") {
    nomNettoye = "Inconnu";
}
console.log(`nom                  : "${nomNettoye}" (corrigé : espaces supprimés)`);

// Traitement de l'âge
let ageNombre = Number(age);
let ageEtat = (Number.isNaN(ageNombre) || ageNombre <= 0) ? "invalide" : "valide";
console.log(`age                  : ${ageNombre} (${ageEtat})`);

// Traitement de l'email (vérifier la présence de @ et d'un point après)
let positionArobase = email.indexOf("@");
let positionPoint = email.indexOf(".", positionArobase);
let emailEtat = (positionArobase !== -1 && positionPoint > positionArobase) ? "valide" : "invalide : pas de point après @";
console.log(`email                : "${email}" (${emailEtat})`);

// Traitement du score
let scoreNombre = parseInt(scoreJeu);
if (Number.isNaN(scoreNombre)) {
    scoreNombre = 0;
}
console.log(`scoreJeu             : ${scoreNombre} (extrait depuis "${scoreJeu}")`);

// Traitement du statut Admin (conversion manuelle)
let isAdmin = (estAdmin === "true");
console.log(`estAdmin             : ${isAdmin} (attention : Boolean("${estAdmin}") = true, conversion manuelle requise)`);

// Traitement de la dernière connexion (valeur par défaut avec ??)
let connexionAffichee = derniereConnexion ?? "Jamais connecté";
console.log(`derniereConnexion    : "${connexionAffichee}" (valeur par défaut via ??)`);

// Traitement du nombre de connexions
let nbConnexions = Number(nombreConnexions);
let affichageNbConnexions = (nbConnexions === 0) ? "Aucune connexion" : nbConnexions;
console.log(`nombreConnexions     : "${affichageNbConnexions}" (0 après conversion)`);

console.log("===============================");