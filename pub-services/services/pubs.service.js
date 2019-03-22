const pubs = require('../mocks/pubs.json');

class Pubs {
    constructor (name, owner , openDays, openHours, beers){
        this.name = name;
        this.owner = owner;
        this.openDays = openDays;
        this.openHours = openHours;
        this.beers = beers;
    }
}

class Owner {
    constructor (firstName, lastName, mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
    }
}

class OpenHours{
    constructor (start, end){
        this.start = start;
        this.end = end;
    }
}

class Beers{
    constructor (type, name){
        this.type = type;
        this.name = name;
    }
}

let pub = pubs.map(b => new Pubs(b.name, 
    new Owner(b.owner.firstName, b.owner.lastName, b.owner.mail), 
    b.openDays, 
    new OpenHours(b.openHours.start, b.openHours.end), 
    new Beers(b.beers.type, b.beers.name)));

function findAll(){
    let coucou= '';
    for(let i = 0; i < pubs.length ; i ++){
        coucou += `pub ${i+1} : ${pub[i].name} \n`;
    }
    console.log(coucou);
    return coucou;
}

function findOpenNow(){

}

module.exports = {
    findAll: findAll
}