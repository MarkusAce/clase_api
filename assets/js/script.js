import {robots} from './robots.js'

// console.log(robots);

// const {id , series, name , sprite1, avatar} = robots[0];

// console.log(id);
// console.log(series);
// console.log(name);
// console.log(sprite1);
// console.log(avatar);

const getRobotById = (id="009")=>{
    return robots.find((robot)=>{
        return robot.id === id;
    });
}

const getRobotBySeries=(series=1)=>{
    return robots.filter((robot)=>{
        return robot.series === series
    })
}

console.log(getRobotById("010"));

console.log(getRobotBySeries(2));

const createRobotCard = (robot) => {
    const {name,weapon,avatar}=robot;

    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card");

    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.setAttribute("src",avatar);
    image.setAttribute("alt",name)

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-body");
    title.textContent = name;

    const weaponInfo = document.createElement("p");
    weaponInfo.classList.add("card-text");
    weaponInfo.textContent = `Weapon: ${weapon}`;
    cardBody.appendChild(title);
    cardBody.appendChild(weaponInfo);

    cardInner.appendChild(image);
    cardInner.appendChild(cardBody);

    card.appendChild(cardInner);

    return card;
}

// let contenedor = document.getElementById("contenedor")

const cardContainer = document.getElementById("card-container")

const getRobots = (robots)=> {
    const robotCards = robots.map(createRobotCard);
    robotCards.forEach((card) => {
        cardContainer.appendChild(card);
        
    });
}

getRobots(robots);