/* // ------ Anfang auskommentieren ------
// ---- Aufgabe 1 ----
let helloworld = "Hello World";
const pi = 3.14;
const burjdubai = "828m";
let fullname = "Jan Schmidt";
const eifeltower = "324m";
let camelcase = "camelCase";
let kursstatus = "true";

// ---- Aufgabe 2 ----
a = 12;
b = a * 3;
console.log(b);
document.write(b)
console.log(document.URL);
console.log("Hello World!");
console.log("Anton");
let name = "Anton";
console.log(name);
let age = 28;
console.log(age);
let job = "Trainer";
console.log(job);
var married = true;
console.log(married);
console.log(name + " ist " + age + " Jahre alt und ist verheiratet: " + married);

// ---- Aufgabe 3 ----

var z = 34;
var z = 67;
console.log(z);

let x = 34;
let x = 67;
console.log(x);

const y = 34;
const y = 67;
console.log(y);

// ---- Aufgabe 4 ----
var carName = "BMW";
console.log(carName)
var x = 150;
console.log(x)
var y = 50;
console.log(y)
var z = x+y;
console.log(z);

let firstName;
let lastName;
let age2;

firstName = "John", lastName = "Doe", age2 = 35;
console.log (firstName + " " + lastName + " " + age2)

// ---- Aufgabe 5 ----
// Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt.
let score = 5 + 5 * 10;
console.log('Ergebnis: ' + score);
// Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern.
let score1 = (5 + 5) * 10;
console.log('Ergebnis: ' + score1);
// Du kannst Werte auf Variablen addieren.
let score2 = 0;
score2 = score2 + 10;
console.log('Ergebnis: ' + score2);
// Hiervon gibt es eine verkürzte Version.
score2 += 10;
console.log('Ergebnis: ' + score2);

let zahl = 1;
zahl = zahl +1;
zahl += 1;

zahl++;
console.log('increment: ' + zahl)

zahl --;
console.log('dekrement: ' + zahl)

// ---- Aufgabe 6 ----
// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);

// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);

// ---- Aufgabe 7 ----
document.write("<h1>Hello World</h1>")
document.write("<p>Have a nice day!</p>")
var myText = "Hello again"
document.write(myText)
var name = "Marcel"
document.write("Name: " + name)
var nachname = "Jostes"
document.write("Nachname: " + nachname)

// ---- Aufgabe 8 ----
var x = "Hello ";
var y = "World<br>";
var z = x + y;
document.write(z)
var n = x + " " + y;
document.write(n);
var x = x + "World";
document.write(x)

var meinString = "Ich bin Erster";
var andererString = "ich komme auf Platz zwei";
var meinString = meinString + " " + andererString;
console.log(meinString);


// ---- Aufgabe 9 ----
window.alert("Hallo Welt");
window.prompt("Bitte geben Sie Ihren Namen ein.");
window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
window.confirm("Stimmen Sie meiner Meinung zu?"); 

let alter = prompt( "Gib mir bitte dein Alter:" );
console.log(alter);

let b = 5;
let a = b * 5 -3;
alert(a);

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
alert(mann + grosse);
*/ // ------ Ende auskommentieren ------
// Alert box with line-breaks:
alert("Hello\nHow are you?");
// Alert the hostname of the current URL:
alert(location.hostname);
// Display a confirmation box:
confirm("Press a button!");
// Confirmation box with line-breaks:
confirm("Press a button!\nEither OK or Cancel.");
// Display a confirmation box, and output what the user clicked:
let text; 
if (confirm("Press a button!") == true) {
  text = "You pressed OK!";
} else {
  text = "You canceled!";
}
document.getElementById("demo").innerHTML = text;