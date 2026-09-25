let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
age = Number(age);
if (age >= 18) {
    alert("Hello " + name + "! You are an adult.");
} else {
    alert("Hello " + name + "! You are a minor.");
}
console.log("Name:", name);
console.log("Age:", age);
console.log("JavaScript program completed.");