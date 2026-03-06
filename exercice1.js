// Déclaration des variables
let a = 42;
let b = "Bonjour";
let c = true;
let d = null;
let e; // Non initialisée (undefined)
let f = [1, 2, 3];
let g = { nom: "Ali" };
let h = NaN;

// Affichage selon le format demandé
console.log(`${a} -> ${typeof a}`);
console.log(`${b} -> ${typeof b}`);
console.log(`${c} -> ${typeof c}`);
console.log(`${d} -> ${typeof d}`);
console.log(`${e} -> ${typeof e}`);

// Pour le tableau, si on fait juste `${f}`, ça donne "1,2,3". 
// Pour avoir "[1,2,3]", on ajoute les crochets manuellement dans le string.
console.log(`[${f}] -> ${typeof f}`);

// Pour l'objet, `${g}` donne automatiquement "[object Object]"
console.log(`${g} -> ${typeof g}`);

console.log(`${h} -> ${typeof h}`);