//// Concaténation avec opérateur ternaire
var nbr = 1; // 0 ou 1 article
console.log("Votre panier comporte " + nbr + " article" + (nbr>1 ? "s" : ""));
var nbrs = 9; // plusieurs articles
console.log("Votre panier comporte " + nbrs + " article" + (nbrs>1 ? "s" : ""));

//// Switch & Case
var date = new Date();
var j = date.getDay();
switch (j) {
  case 1:
    console.log("Lundi");
    break;
  case 2:
    console.log("Mardi");
    break;
  case 3:
    console.log("Mercredi");
    break;
  case 4:
    console.log("Jeudi");
    break;
  case 5:
    console.log("Vendredi");
    break;
  case 6:
    console.log("Samedi");
    break;
  case 7:
    console.log("Dimanche");
    break;
  default:
    console.log("Jour inconnu");
}
