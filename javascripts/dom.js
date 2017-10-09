"use strict";

const createDomString = (obj) => {
    let dinoName = obj.name;
    printToDom(dinoName); 
};

const printToDom = (str) => {
    $('#dinosaur').append(str);
};

module.exports = {
    createDomString,
};