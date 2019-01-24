/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When you use this without having anything to refer to, .this refers to the window.
* 2. Implicit binding lets you refer out from a method to the properties of the object its contained in. It always refers to whatevers left of the .function
* 3. The new binding is used to create objects with constructor functions. You use the this keyword to to refer to the specific instance of an object getting created and returned.
* 4. You can use Explicit binding to override what objects the new instances point to. using .bind .call or .apply changes what object the this keyword points to.
*
* write out a code example of each explanation above
*/

// Principle 1

function amIaCat(isCat){
    console.log(this);
    return isCat;
}

amIaCat("yes");

// Principle 2

const catIs = {
    tiredLevel:'very',
    hungry: 'always',
    meow: function(name) {
        console.log(`${name} is ${this.tiredLevel} tired and ${this.hungry} hungry!`);
        console.log(this);
    }
};

catIs.meow('Squiddy');





// Principle 3

function workerLog(obj){
    this.name = obj.name;
    this.age = obj.age;
    this.sex = obj.sex;
    this.sayHi = function() {
        console.log(`Hello, I am ${this.name}, I am ${this.age} years old and I am a ${this.sex}`);
        console.log(`this new binding`, this);
    };
}

const zev = new workerLog({name:'zev', age:18,sex:'male'});
const eli = new workerLog({name:'eli', age:23,sex:'male'});
const joe = new workerLog({name})
eli.sayHi();
 zev.sayHi();

// Principle 4

eli.sayHi.call(zev);
zev.sayHi.apply(eli);
eli.sayHi.bind(joe);  
