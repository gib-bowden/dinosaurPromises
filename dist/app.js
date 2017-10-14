(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const dom = require('./dom'); 

let dinosaurs = [];
let cats = []; 

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

const catsJSON = () => {
    return new Promise ((resolve, reject) => {
        $.ajax('./database/cats.json').done((data) => {
            resolve(data.cats); 
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
            catsJSON().then((cats) => {
             results.forEach((dinos) => {
                pushDinos(dinos, cats);
            });
            makeDinos(dinosaurs);
        }).catch((error) => {
            console.log("error", error); 
        });
    });
};

const makeDinos = (arr) => {
    arr.forEach((dino) => {
        dom.createDomString(dino); 
        console.log(dino); 
    });
};


const pushDinos = (dinoArr, catsArr) => {
    dinoArr.forEach((dino) => {
        dino.snacks = []; 
        dino.catIds.forEach((id) => {
            catsArr.forEach((cat) => {
                if (cat.id === id) {
                    dino.snacks.push(cat); 
                }
            });
        });
        dinosaurs.push(dino);
    });
}; 

const setCats = (arr) => {
    cats = arr;
};


module.exports= {
    initializer,
    getDinos
};
},{"./dom":2}],2:[function(require,module,exports){
"use strict";

let dinoDiv = $('#dinosaur'); 

const createDomString = (dino) => {
    let dinoString = "";
    dinoString += `<div class= ${dino.info === 'Carnivore' ? 'card-bad' : 'card-good'}>
                    <h1>${dino.type}</h1>
                    <h4>${dino.bio}</h4>
                    ${dino.info === 'Carnivore' ? '<h4>Has some tasty snacks</h4>' : '<h4>Has some friends</h4>'}`;
                    dinoString += `<div class='card-holder'>`;
                    dino.snacks.forEach((cat) => {
                        dinoString += `<div class="card"
                                        <h5>${cat.name}</h5>
                                        <div class="card-img">
                                            <img src="${cat.imageUrl}">
                                        </div>
                                        <p class="card-description">${cat.specialSkill}</p>
                                    </div>`;
                    });
                    dinoString += `</div>
                                </div>`;
                   
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
