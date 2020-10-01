//Normal funktion
function sum(a, b) {
    return a + b;
}

// Arrowfunction
let sum2 = (a, b) => {
    return a + b;
}

//Förenklad syntax, fungerar när det bara är ett uttryck som generas, då kan man alltså plocka bort måsvingarna och köra allt på samma rad.
let sum3 = (a, b) => a + b;


//Fler exempel
function isPositive(number) {
    return number >= 0
}

// När man enbart har en parameter kan ta bort parenteserna
let isPositive2 = number => number >= 0;


/*Passa funktioner i funktioner
document.addEventListener('click', function() {
    console.log('click')
});

document.addEventListener('click', function() {
    console.log('click')
});*/


/* *********************
********* THIS *********
*********************** */

class Print {
    constructor(message) {
        this.message = message;
    }
    printMessageArrow() {
        setTimeout(() => {
            console.log(`Arrow${this.message}`)
        }, 100)
    }

    printMessageFunction() {
        setTimeout(function() {
            console.log(`Funktion${this.message}`)
        }, 200)
    }
}

let printer = new Print('Tjena!S');
printer.printMessageArrow();
printer.printMessageFunction();
//console.log(this.message);


// Mosh on this keyword


/* In classes, method -> obj 
Om en funktion är en del av ett objekt så kallar man den en metod */
// Function -> global (window in browsers, global in node)

//skapar ett objekt vi kallar video
const film = {
    title: 'Flykten från ES5',
    year: '1984',
    tags: ['a', 'b', 'c'],
    // skapar en metod
    play() {
        console.log(this);
    },
    showTags() {
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    }
};
// startar metoden och this referar här till hela objkektet
film.play();
film.showTags();
// Det går även skapa metoder till objektet fast utanför krullparanteser
film.stop = function() {
    console.log(this);
};

// ex funktion utanför objekt aka en vanlig funktion
function spelaFilm() {
    console.log(this);
}

spelaFilm();