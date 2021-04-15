'use strict';

console.log('Hello World');

const person = {
    name: 'Ashlynn',
    age: 17,
    height: '5\'3\"',
    email: 'genericadress@notgmail.org',
    nickName: 'Ash'
};

Person.prototype.render = function(){
    
    let mainTest = document.getElementById('mainTest');

    let cardMake = document.createElement('section');
    cardMake.setAttribute('class','cards');

    let nameh2 = document.createElement('h2');
    let agep = document.createElement('p');
    let nicknamep = document.createElement('p');

    nameh2.textContent =this.name;
    agep.textContent =`Age: ${this.age} years old`;
    nicknamep.textContent = `Nickname: ${this.nickName}`;

    cardMake.appendChild(nameh2);
    cardMake.appendChild(agep);
    cardMake.appendChild(nicknamep);

    mainTest.appendChild(cardMake);

//Example/steps below

   /* 
    //createing the elements
    
    let nameh2 = document.createElement('h2');
    let ageh2 = document.createElement('h2');
    let nicknameh2 = document.createElement('h2');
    
    //Assigning properties
    
    nameh2.textContent ='My name is ' +  this.name;
    ageh2.textContent = 'I am ' + this.age + ' years old.';
    nicknameh2.textContent = `People call me ${this.nickName}`;
    
    //Append
    section.appendChild(nameh2);
    section.appendChild(ageh2);
    section.appendChild(nicknameh2);

    console.log('I am the render function.');
    */

}

function Person(name, age, email, nickName){

    this.name = name;
    this.age = age;
    this.email = email;
    this.nickName = nickName;

}



let ian_person = new Person('Ian', 17, 'Ian@ian.com', 'Terminator 2');
let jojo_person = new Person('Jo-Jo', 17, 'Jojo@jojo.com', 'Terminator 4');
let marrissa_person = new Person('Marrissa', 17, 'Marrissa@marrissa.com', 'Terminator 3');

console.log(ian_person.name);
console.log(jojo_person.name);


ian_person.render();
marrissa_person.render();
jojo_person.render();