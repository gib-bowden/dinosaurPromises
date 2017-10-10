(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const dom = require('./dom'); 

let dinosaurs = [];

const initializer = () => {
    dinoGetter();    
}; 

const getDinos = () => {
    return dinosaurs; 
};


//PYRAMID OF DOOM
// const dinoGetter = () => {
//     $.ajax({
//         method: 'GET',
//         url:`./database/dino1.json`
//     })
//     .done((data) => { 
//         console.log(data);
//         pushDinos(data.dinosaurs1);
//         console.log(dinosaurs);
//         $.ajax({
//             method: 'GET',
//             url:`./database/dino1.json`
//         })
//         .done((data) => { 
//             console.log(data);
//             pushDinos(data.dinosaurs1);
//             console.log(dinosaurs);$.ajax({
//                 method: 'GET',
//                 url:`./database/dino1.json`
//             })
//             .done((data) => { 
//                 console.log(data);
//                 pushDinos(data.dinosaurs1);
//                 console.log(dinosaurs);
//     }); 
//     // .done(() => {
//     //     dom.createDomString(cats); 
//     // })
//     // .fail((error) => {
//     //     console.log(error);
//     // }); 
// };


const firstDinoJSON = () => {
    return new Promise ((resolve, reject) => {
        $.ajax('./database/dino1.json').done((data) => {
            resolve(data.dinosaurs1); 
        }).fail((error1) => {
            reject(error1); 
        });
    });
};

const secondDinoJSON = () => {
    return new Promise ((resolve, reject) => {
        $.ajax('./database/dino2.json').done((data) => {
            resolve(data.dinosaurs2); 
        }).fail((error1) => {
            reject(error1); 
        });
    });
};

const thirdDinoJSON = () => {
    return new Promise ((resolve, reject) => {
        $.ajax('./database/dino3.json').done((data) => {
            resolve(data.dinosaurs3); 
        }).fail((error1) => {
            reject(error1); 
        });
    });
};

// const dinoGetter = () => {
//     firstDinoJSON().then((results) => {
//         pushDinos(results); 
//     });
//     secondDinoJSON().then((results) => {
//         pushDinos(results); 
//     });
//     thirdDinoJSON().then((results) => {
//         pushDinos(results); 
//         console.log(dinosaurs);
//     })     
//     .catch((error) => {
//         console.log(error);
//     }); 
//  };

//Promise good way
// const dinoGetter = () => {
//     firstDinoJSON().then((results) => {
//         pushDinos(results);
//         return secondDinoJSON(); 
//     }).then((results) => {
//         pushDinos(results);
//         return thirdDinoJSON();
//     }).then((results) => {
//         pushDinos(results);
//         makeDinos(dinosaurs);
//     }); 
// };


const dinoGetter = () => {
    Promise.all([firstDinoJSON(), secondDinoJSON(), thirdDinoJSON()])
        .then((results) => {
             results.forEach((arr) => {
                pushDinos(arr);
            });
            makeDinos(dinosaurs);
        }).catch((error) => {
            console.log("error", error); 
        });
};

const makeDinos = (arr) => {
    arr.forEach((dino) => {
        dom.createDomString(dino); 
    });
};


const pushDinos = (arr) => {
    arr.forEach((dino) => {
        dinosaurs.push(dino);
    });
}; 

module.exports= {
    initializer,
    getDinos
};
},{"./dom":2}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";

const data = require('./data');

$(document).ready(function() {
   data.initializer(); 
});



},{"./data":1}]},{},[3]);
