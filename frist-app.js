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
