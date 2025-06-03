let x = 50;
// let   x = 20;

{
let x = 50;
// let   x = 20
    //  document.getElementById('demo2').innerHTML = x;
    console.log(x);
}

document.getElementById('demo1').innerHTML = x;


// Constent 

const numbers = [1,2,3,4]; 
// numbers = [5,6];  // This will be show an error.  You can not reassign array
numbers.push(5);
numbers[0] = 10; // Change the elements of constant array
numbers[3] = 30; // Change the elements of constant array

console.log(numbers);

// Same as objec 
const person = {name: 'Sanowar'}
// person = {age: 30} // This will be show an error.  invalid assignment to const 'person'
person.age = 40; // Change the elements of constant object
person.name = 'Mobin'; // Change the elements of constant object


console.log(person);
