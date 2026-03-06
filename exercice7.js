// Déclaration des variables
let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = "PROMO"; // Beddelnaha mn null bach t-calcula la réduction
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

// 1. Calcul du sous-total
let sousTotal = prix * quantite;

// 2. Calcul de la réduction
let reduction = 0;
if (codePromo !== null && estMembre === true) {
    reduction = sousTotal * (reductionPourcentage / 100);
}

// 3. Calcul du total final
let total = sousTotal - reduction;

// 4. Vérification du solde
let statut = "Solde insuffisant";
if (soldeCompte >= total) {
    statut = "Paiement accepté";
}

// 5. Nouveau solde
let nouveauSolde = soldeCompte;
if (soldeCompte >= total) {
    nouveauSolde = soldeCompte - total;
}

// 6. Affichage du récapitulatif avec l'alignement exact et les fautes de frappe du prof (MAS)
console.log("===== RÉCAPITULATIF =====");
console.log(`Produit    : ${nomProduit}`);
console.log(`Quantité   : ${quantite}`);
console.log(`Prix unit. : ${prix} MAD`);
console.log(`Sous-total : ${sousTotal} MAD`);
console.log(`Réduction  : ${reduction} MAS`);
console.log(`Total      : ${total} MAS`);
console.log(`Statut     : ${statut}`);
console.log(`Solde      : ${nouveauSolde} MAD`);
console.log("=========================");