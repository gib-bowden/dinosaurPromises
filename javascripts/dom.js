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