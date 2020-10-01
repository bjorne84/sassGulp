/* För att skapa en klass använder vi nyckelordet class
följt av namnet vi döper klassen till, man brukar använda stor bokstav
till klassnamn*/
class Person {
    /*Skapar en konstruktor, gör det sedan lätt att initera (skapa) nya objekt */
    constructor (age, gender, name){
        this.age = age;
        this.gender = gender;
        this.name = name;
    }
    printText() {
        console.log('hej');
    }
}

let personOne = new Person('36', 'male', 'Björn')
personOne.printText();
