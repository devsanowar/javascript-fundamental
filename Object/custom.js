const car ={
	carName: 'Toyota',
    carModel: 3570,
    carColor: 'white',
    carWeight: '500kg',
};

car.engine = "Hino";

// Accessing a property with a expression
let a = "carName";
let b = "carModel";
delete car[b]; // Delete object property



console.log("Car Name :" + car[a] +" " + "Car Model" + " " + car[b] + " " + "Car engine:" + car.engine);


document.getElementById('appname').innerHTML = `
    <strong>Name: </strong>${car.carName}</br>
    <strong>Car Model: </strong>${car.carModel}</br>
    <strong>Car Color: </strong>${car.carColor}</br>
    <strong>Car Weight: </strong>${car.carWeight}</br>
`;



// Empty object
const person = {}
person.firstName = "Sanowar";
person.lastName = "Hossen";
person.age = 30;

delete person.age; // Delete the property . when i delete the property then show result undefined

// আমরা চাইলে অবজেক্ট এর মধ্যে থাকা ভাল্যু চেঞ্জ করতে পারি
let x = person;

console.log(x.age);


// document.getElementById('empty-object').innerHTML = `${person.firstName} is ${person.age} Years Old`

document.getElementById('empty-object').innerHTML = person.firstName + " "+ "is" + person.age + " " + "years old";


// Object create by new keyword

const animal = new Object();
animal.name = "Dog";
animal.color = "red";
animal.type = "male";
animal.sayHello = function(){
    return "Hello"
}


document.getElementById('animal').innerHTML = `<strong>Name:</strong>${animal.name} <br>
<strong>Color:</strong>${animal.color} ${animal.sayHello()}`



// Object constructor
function Student(first, age, phone){
    this.fullname = first;
    this.age = age;
    this.phone = phone;
}
