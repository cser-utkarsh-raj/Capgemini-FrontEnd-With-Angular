let person = {
  name: "Gautam",
  age: 22,
  city: "Jaipur",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

console.log(person);

console.log(person.name);
console.log(person["age"]);

person.country = "India";
person.age = 23;

console.log(person);

delete person.city;

console.log(person);

for (let key in person) {
  console.log(key, person[key]);
}

person.greet();

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

let student = {
  name: "Gautam",
  marks: {
    math: 90,
    science: 85
  }
};

console.log(student.marks.math);


// const person = {
//   name: "Gautam"
// };

// function greet(age, city) {
//   console.log("Name:", this.name, "| Age:", age, "| City:", city);
// }

// // call → arguments passed one by one
// greet.call(person, 22, "Jaipur");

// // apply → arguments passed as array
// greet.apply(person, [23, "Delhi"]);

// // bind → returns new function
// const newFunc = greet.bind(person, 24, "Mumbai");
// newFunc();


// destructuring
// let person1 = {name: "Anant", age: 21};
// let {name, age} = person;
// console.log(name, age);

//freeze
// console.log(Object.freeze(person));
// Object.isFrozen();

//seal
// Object.seal(person);
// Object.isSealed();


// let copyobj = {...person};
// console.log(copyobj);








//Rest Parameter
function demo(a,...args) {  //rest parameter should always be the last one in the parameter
    console.log(a);
    console.log(args);
}

demo(1, 2, 3);

//modules
//named expoet
export const add = (a, b) => a + b;

//default Export - Only one default export per file and use the same name while importing
export default function greet(name) {
    return "Hello " + name;
}