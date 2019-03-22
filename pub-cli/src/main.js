var pubServices = require('pub-services');

function getListPub(){
    pubServices.services.pubServices.findAll();
}

module.exports = {
    getListPub: getListPub
};