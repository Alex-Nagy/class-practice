/* function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
  };
}
 */

/* const policeman = {
  rank: "Vezérezredes",
  arrest: function () {
    console.log(`Mint ${this.rank} letartóztatom`);
  },
};
const policeman2 = {
  rank: "Őrnagy",
  arrest: function () {
    console.log(`Mint ${this.rank} letartóztatom`);
  },
};
 */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
    console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
  }
}

class Policeman extends Person {
  constructor(name, age, rank) {
    super(name, age);
    this.rank = rank;
  }
  greet() {
    console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
  }
  arrest(){
      console.log("letartozom")
  }
}

policeman = new Policeman("Jani", 60,"Vezérezredes");
policeman2 = new Policeman("Béla",80,"Őrnagy");


policeman.greet();
policeman.arrest();
policeman2.greet();
policeman2.arrest();

/* person5.greet();
const person4 = new Person("John", 25);
const person5 = new Person("Jimbo", 55);

person4.greet();
 */
const person1 = {
  name: "John",
  age: 25,
  /*   
  greet: function () {
      console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
    },
 */
};
console.log(person1);

/* 
const person2 = {
    name: "Jim",
  age: 35,
  greet: function () {
    console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
  },
};
const person3 = {
  name: "Jack",
  age: 45,
  greet: function () {
    console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
  },
};

const greeting = (person) => {
  console.log(`Hello my name is ${person.name} and I'm ${person.age}`);
};

person1.greet();
person2.greet();
person3.greet();
 */
/* 
greeting(person1);
greeting(person2);
greeting(person3);
 */
