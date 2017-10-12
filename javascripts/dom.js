"use strict";

let dinoDiv = $('#dinosaur'); 

const createDomString = (obj) => {
    let dinoString = "";
    dinoString += `<div>
                    <h1>${obj.type}</h1>
                   <div>`;
    printToDom(dinoString); 
};

const printToDom = (str) => {
    dinoDiv.append(str);
};

module.exports = {
    createDomString,
};