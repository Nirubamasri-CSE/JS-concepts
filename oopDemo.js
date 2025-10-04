// oopDemo.js

// ------------------ OOP Concepts ------------------
class Person {
  constructor(name) {
    this.name = name; // encapsulation
  }
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
  greet() {
    return `${super.greet()} and I work as a ${this.role}`; // method overriding
  }
}

// Wait until DOM is ready to access elements
document.addEventListener("DOMContentLoaded", function() {
  let oopBtn = document.getElementById("oopBtn");
  let oopOutput = document.getElementById("oopOutput");

  oopBtn.addEventListener("click", function() {
    let p = new Person("John");
    let e = new Employee("Alice", "Developer");

    oopOutput.textContent = [
      p.greet(),
      e.greet(),
      "Inheritance: Employee extends Person",
      "Encapsulation: name stored privately in object",
      "Polymorphism: greet() behaves differently"
    ].join("\n");

    console.log("OOP Demo:", p, e);
  });
});
