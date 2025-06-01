const fs = require("fs");

fs.writeFileSync("hello.txt", "teste node.js");

const person = {
  name: "Max",
  age: 28,
  primeiraForma() {
    console.log("Ola, eu sou " + this.name);
  },
  segundaForma: function () {
    console.log("Tenho " + this.age + " anos");
  },
};

person.primeiraForma();
person.segundaForma();

//copiando objetos
const copiedPerson = { ...person };
console.log(copiedPerson);

//array aninhado
const hobbies = ["sport", "gym"];
const copiedHobbies = [...hobbies];
console.log(copiedHobbies);

//Rest Operators

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
