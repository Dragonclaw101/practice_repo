'use strict';

console.log('Hello World');


let person = {
    personName: 'Ashlynn',
    personAge: 17,
    personHeight: '5\'3\"',
    personEmail: 'genericadress@notgmail.org',
    personNickName: 'Ash'
};

console.log(person.personName,person.personAge,person.personHeight,person.personEmail,person.personNickName);


let section = document.getElementById('mainTest');

//createing the elements

let nameh2 = document.createElement('h2');
let ageh2 = document.createElement('h2');
let nicknameh2 = document.createElement('h2');

//Assigning properties

nameh2.textContent ='My name is ' +  person.personName;
ageh2.textContent = 'I am ' + person.personAge + ' years old.';
nicknameh2.textContent = `People call me ${person.personNickName}`;

//Append
section.appendChild(nameh2);
section.appendChild(ageh2);
section.appendChild(nicknameh2);