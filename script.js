// let vardas = "Artūras";
// let amzius = 40;
// let grupe = "T23/s";

// console.log("Mano vardas yra " + vardas);
// console.log("Mano amzius yra " + amzius);
// console.log("Mano grupe yra " + grupe);

// console.log(`Mano vardas yra ${vardas}`);
// console.log(`Mano amzius yra ${amzius}`);
// console.log(`Mano grupe yra ${grupe}`);

// -----------------------------------------------------
//VIDURKIO SKAICIAVIMAS

// let vidurkis = 8.49999999999999;
// let lankomumas = true;

// if (vidurkis >= 8.5 && lankomumas) {
//    console.log (`Jusu vidurkis yra ${ vidurkis } ir lankomumas geras, todel stipendija gausite`);
// } else {
//     console.log ("deja, jusu vidurkis yra " + vidurkis + " manazesnis uz 8.5, stipendija jums nepriklauso");
// }

// -----------------------------------------------------
//PASKOLOS SKAICIAVIMAS 1 VARIANTAS

// console.log ("labas");
// let atlyginimas = 1300;
// let vienisas = false;
// let turiVaika = false;
// let turiDuVaikus = false;

// if (atlyginimas >= 800 && vienisas) {
//     console.log ("Jus gausite paskola");
// } else if (atlyginimas >= 1000 && turiVaika) {
//     console.log ("Jus gausite paskola");    
// } else if (atlyginimas >= 1200 && turiDuVaikus) {
//     console.log ("Jus gausite paskola"); 
// } else {
//     console.log ("Gausite spyga");
// }

// -----------------------------------------------------
//PASKOLOS SKAICIAVIMAS 2 VARIANTAS

// console.log ("labas");
// let atlyginimas = 1150;
// let vienisas = 1;
// let vaikai = 2;

// if (atlyginimas >= 800 && vienisas == 1 && vaikai == 0) {
//     console.log ("Jus gausite paskola");
// } else if (atlyginimas >= 1000 && vaikai == 1) {
//     console.log ("Jus gausite paskola");    
// } else if (atlyginimas >= 1200 && vaikai == 2) {
//     console.log ("Jus gausite paskola"); 
// } else {
//     console.log ("Gausite spyga");
// }

// -----------------------------------------------------
//METU LAIKAS 

console.log ("METU LAIKAS ");
let menuo = "Liepa";
switch (menuo) {
    case 'Gruodis':
    case 'Sausis':
    case 'Vasaris':
        console.log (menuo + " yra ziemos menuo");
        break;  
    case 'Kovas':
    case 'Balandis':
    case 'Geguzis':
        console.log (menuo + " yra pavasario menuo");
        break;
    case 'Birzelis':
    case 'Liepa':
    case 'Rugpjutis':
        console.log (menuo + " yra vasaros menuo");
        break;
    case 'Rugsejis':
    case 'Spalis':
    case 'Lapkritis':
        console.log (menuo + " yra vasaros menuo");
        break;
    default:
         console.log ("Tokio menesio nera arba pasitikrinkite rasyba")

}

