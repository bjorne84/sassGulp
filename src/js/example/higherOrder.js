/* Funktioner som tar andra funktioner som argument eller genom att returnera och skapa funktioner. 
Higher-order funktioner möjliggör att skapa en abstraktionsnivå över handlingar och inte bara värden.*/

const items = [
    { name: 'bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
];

/*Filter method, tar en enskild funktion som argument*/
const filteredItems = items.filter((item) => {
    /* Alla item med pris under eller lika med 100 kommer att vara i våran filtrerade
    array*/
    return item.price <= 100
});

//console.log(items)
/* Om det är sant är det i en ny array, om det är false är det inte i en den nya arrayen*/
console.log(filteredItems);


/*Map method, tar en enskild funktion som argument*/
const itemNames = items.map((item) => {
    /* Returnerar namnet*/
    return item.name
});

console.log(itemNames);

/* Find method
hittar något i en array*/

/*Found, hittar ngt i en array*/
const foundItem = items.find((item) => {
    /* Returnerar namnet*/
    return item.name === "Album";
});

console.log(foundItem);


/* foreach
loopar igenom hela arrayen och sedan kör man koden inuti krullparanteser*/

items.forEach((item) => {
    /* Returnerar namnet*/
    console.log(item.name);
});


/* some
Returnerar true eller false om villkoret stämmer eller ej , kollor ngt är true eller false*/
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems)


/* every
Väldigt likt some men kollar om alla poster i arrayen uppfyller villkoren eller ej
returnerar true eller false*/
const every = items.every((item) => {
    return item.price <= 1000
})

console.log(every)


/* reduce
Tar en item och en variabel till vad vi vill reducera allt till, en andra parameter behövs
också och anger startpunkten, i detta fall väljer vi att börja vid 0, */
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total)



/* includes, 
returnerar true eller false om arrayen innehåller det valda värdet
*/

const items2 = [1, 2, 3, 4, 5];
const includesTwo = items2.includes(2)
console.log(includesTwo)


/* HUR callbacks fungerar*/
function sing(callback) {
    console.log('la al la');
    if (callback instanceof Function) {
        callback();
    }
}

function meow() {
    console.log("meow moew");
}

/* Förenkling*/

function setup() {
    sing2(function() {
        console.log('mewo mewo');
    });

}


function multiplier(x, factor) {
    return x * factor;
}

/* returnerar en function i en function,

Det som händer här är att man skapar en function sedan genom att exempelvis skriva
let dubblare = multiplier(2);
sedan kam man kalla på den genom att skriva dubblare(2)
Då tar den 2 * 2 = 4
*/
function multiplier2(factor) {
    return /* steg2*/function(x) {
        return x * factor;
    }
}


/* Samma funktion , från steg 2 ovan, fast med arrowfunction syntax*/
x => x * factor;