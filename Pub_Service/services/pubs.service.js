const pubs = require('../mocks/pubs');

function findAll(){
    for(let i = 0; i < pubs.length ; i ++){
        console.log(`pubs ${i+1} : ${pubs[i].name}`);
    }
}

function findOpenNow(){

}

module.exports = {
    findAll: findAll
}