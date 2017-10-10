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


const dinoGetter = () => {
    firstDinoJSON().then((results) => {
        pushDinos(results);
        return secondDinoJSON(); 
    }).then((results) => {
        pushDinos(results);
        return thirdDinoJSON();
    }).then((results) => {
        pushDinos(results);
        makeDinos(dinosaurs);
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