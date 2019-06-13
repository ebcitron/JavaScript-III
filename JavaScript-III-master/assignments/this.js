/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global - value of this = window or console object
 * 2.  Implicit binding
 * 3. New
 * 4. Explicit binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

// function sayName(name) {
//     console.log(this);
//     return name;
// }
// sayName("ELI KSDF:JLKSD");

// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: "sup",
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);

    console.log("this", this);
  }
};

myObj.sayHello("Zach");

function sayHello() {
    console.log(`${this.name} says ${this.greeting}`);
}

const Chris = {
    name: 'Chris',
    greeting: 'Hi',
    greet: sayHello

}
Chris.greet();

const Eli = {
    name: 'Eli',
    greeting: 'sup',
    greet: sayHello
}

Eli.greet();
// Principle 3

// code example for New Binding

function Animal(character) {
    this.type = character.type;
    this.greeting = character.greeting;
    this.greet = () => console.log(`The ${this.type} says ${this.greeting}!`);
}

const Cat = new Animal({type: 'cat', greeting: 'meow'});
const Dog = new Animal({type: 'dog', greeting: 'bark'});
Cat.greet();
Dog.greet();

// Principle 4

// code example for Explicit Binding
 



// Principle 3

// code example for New Binding

function NoseyMom(inquisitive) {
    this.greeting = 'Hello ';
    this.inquisitive = inquisitive;
    this.speak = function() {
      console.log(this.greeting + this.inquisitive + " did you say that?");
      console.log(this);
    };
  }
  
  const teresa = new NoseyMom('why');
  const ramona = new NoseyMom('how');
  
  teresa.speak();
  ramona.speak();


// Principle 4

// code example for Explicit Binding

teresa.speak.call(ramona);
ramona.speak.apply(teresa);

// Chris' example

/*const yourObject = {
  name: 'Kitsueki',
  city: 'Indianapolis',
  favoriteFood: 'Thai Fried Rice',
  age: 26
}

const thingsYouEnjoy = ['Running', 'Programming', 'Cooking', 'Loud Music'];

function tellUsAboutYourself(thing1, thing2, thing3){
  return `Hi! My name is ${this.name}, I'm ${this.age}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
}

// Using yourObject and thingsYouEnjoy array, set the context of this on tellUsAboutYourself and call the function.

// Method 1
yourObject.introduce = tellUsAboutYourself;
console.log(yourObject.introduce(...thingsYouEnjoy));

// Method 2
function Introduction(attrs) {
  this.name = attrs.name;
  this.city = attrs.city;
  this.favoriteFood = attrs.favoriteFood;
  this.age = attrs.age;
  this.intro = tellUsAboutYourself;
}
const me = new Introduction(yourObject);
console.log(me.intro(...thingsYouEnjoy));
*/

// STRETCH: 
// 1. add some keys to the yourObject and use them in the funciton.
// 2. Use ES6 rest/spread syntax

const yourObject = {
    name: 'Dan Levy',
    city: 'Denver',
    favoriteFood: '🍕',
    favoriteLanguage: 'JavaScript'
  }
  
  const thingsYouEnjoy = ['Hiking', 'JavaScript', 'Teaching']
  const otherThingsYouEnjoy = ['Stuff', 'More Stuff']
  
  // ASSIGNMENT: Using yourObject and thingsYouEnjoy array, set the context of this on tellUsAboutYourself and call the function.
  
  function tellUsAboutYourself(args){
    let enjoy = args.reduce((total, current) => args.indexOf(current) === args.length - 2 ? total + current + ', and ' : total + current + ', ', '');
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${enjoy}. I love to eat ${this.favoriteFood}. I like to code in ${this.favoriteLanguage}.`
  }
  
  // SOLUTION 
  let args = [...thingsYouEnjoyav, ...otherThingsYouEnjoy];
  tellUsAboutYourself.apply(yourObject, [args]);