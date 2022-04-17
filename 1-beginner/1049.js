var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

var [subphylum, subclass, group] = lines;

if (subphylum === "vertebrado") {
  if (subclass === "ave") {
    if (group === "carnivoro") console.log("aguia");
    else if (group === "onivoro") console.log("pomba");
  } else if (subclass === "mamifero") {
    if (group === "onivoro") console.log("homem");
    else if (group === "herbivoro") console.log("vaca");
  }
} else if ((subphylum = "invertebrado")) {
  if (subclass === "inseto") {
    if (group === "hematofago") console.log("pulga");
    else if (group === "herbivoro") console.log("lagarta");
  } else if (subclass === "anelideo") {
    if (group === "hematofago") console.log("sanguessuga");
    else if (group === "onivoro") console.log("minhoca");
  }
}
