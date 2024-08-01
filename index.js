// Your JavaScript goes here!
/*const MAX=57;
let actual = MAX-13;
let percentage = actual/MAX;
console.log(percentage);



let person = {
    name:'Anish',
    Age: 19
}

person.Age = 20; 
person['name'] = "Anish-SR";

console.log(person);


function sum(a,b){
    return a + b;
}

console.log(sum(7,7));


const namew = 'Anish';
const greeting = `Hello, ${namew}`;
console.log(greeting);

*/


/*
let a = "anish";
console.log(a);

let b = a;
console.log(b);

a = 'ya'
console.log(a);

console.log(b);

*/


/*let name = 'anish';
const greeting = `Hello ${name}`;   // `  `  is used for template literal
console.log(greeting);

*/

/*const select = document.querySelector("select");
const para = document.querySelector("p");

// Fix: Use addEventListener instead of onchange
select.addEventListener("change", setDog);

function setDog(){
    const choice = select.value;

    if(choice === "labrador"){
        para.textContent = "My labra";
    }
    else if(choice === "beagle"){
        para.textContent = "My beagle";
    }
    else if(choice === "golden-retriever"){
        para.textContent = "my golden-retriever";
    }
    else if(choice === "shepherd"){
        para.textContent = "My shepherd";
    }
    else{
        para.textContent = "";
    }
}
    */


const a = 'Anish is bad';
const b = a.replace('bad','good');

console.log(b);


let myarray = ["I", "love", "chocolates"];
let mystring = myarray.join(" ");
console.log(mystring);

const mynumber = Math.random();
console.log(mynumber);


let selectedlist =['red', 'blue'];
console.log(selectedlist.length);


function greet(greeting, name){
    console.log(`${greeting}, ${name}`);
}

greet("Hellowww" , "Anish");


for(let i=0; i<10; i++){
    console.log("Anish is good",i);
}


function Sq(number){
    return number * number;
    //have access to 'this' keyword
}


console.log(Sq(12));


//function expressiion

const game = function(params){

}


//arrow fucntios

const abhi = (params) => {

}


const mult = (a,b) => {
    return a*b;
}

/* OR
const mult = (a,b) => a*b;

*/

console.log(mult(5,7));

const person = {
    name: ["Anish", "kirat"], //object's property
    age: [18, 32],  //object's property
    bio: function(){ //object's method
        console.log(`${this.name[0]} is ${this.age[0]} years old`);
    },

    intro: function(){ //object's method
        console.log(`Hi!, this is ${this.name[1]}. I am ${this.age[1]} years old. Thanks for joining Cohort 3.`);
    },

    /*
    OR
    intro(){
        console.l......
    }
    */


};

const Mydataname = 'height';
const Mydatavalue = '1.75m';
person[Mydataname] = Mydatavalue;


const objj = {
    name: {
        firstName: 'Anish',
        lastName: 'Rawat'
    },
};


function joke(tyle){
    this.tyle = tyle;
    this.introduceself = function(){
        console.log(`Hi, I'm ${this.tyle}.`);
    };
}


const Avi  = new joke("Avi");
Avi.introduceself();


//factory fucntion

function Createcircle(radius){
    return {
        radius: radius,  //or simply radius 
        draw(){
            console.log("draw");
        }
    };
}

const circle1 = Createcircle(12);
console.log(circle1);



//Constructor practise 

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);


