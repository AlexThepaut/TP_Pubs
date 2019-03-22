const pubs = require('../mocks/pubs');

function findAll(){
    let coucou;
    for(let i = 0; i < pubs.length ; i ++){
        coucou += `pubs ${i+1} : ${pubs[i].name}`;
    }
    return coucou;
}

function findOpenNow(){

}

module.exports = {
    findAll: findAll,
    findOpenNow: findOpenNow
}