//Implement your code here 
// 
let box1Score = 0;
let box2Score = 0;
let pokemonNo = 0;
let c1xp = 0;
let c2xp = 0;
// 
initalFetch()

// 
const fightButton = document.querySelector("#fight");
const p1_name = document.querySelector("#p1_name");
const p2_name = document.querySelector("#p2_name");
const p1_score = document.querySelector("#p1_score");
const p2_score = document.querySelector("#p2_score");
const card1Img = document.querySelector("#card1 #img");
const card2Img = document.querySelector("#card2 #img");
const card1Name = document.querySelector("#card1 #name");
const card2Name = document.querySelector("#card2 #name");
const card1Experience = document.querySelector("#card1 #experience");
const card2Experience = document.querySelector("#card2 #experience");
const card1Abilities = document.querySelector("#card1 #abilities");
const card2Abilities = document.querySelector("#card2 #abilities");

// 
fightButton.addEventListener('click', letsFight);



function letsFight() {
    const randomId = randomInteger(1, pokemonNo)
    const randomId2 = randomInteger(1, pokemonNo)
    resetAll()
    fetchPokemon(randomId, randomId2)

}

function initalFetch() {
    fetch('https://pokeapi.co/api/v2/pokemon').then((response) => {
        return response.json();
    }).then((data) => {
        pokemonNo = data.results.length
    })
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchPokemon(id, id1) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokData = await response.json()
    showBox1(pokData)
    const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id1}`)
    const pokData1 = await response1.json()
    showBox2(pokData1)
    updateScore(c1xp, c2xp)
}

function showBox1(pokemonData) {
    p1_name.textContent = "John";
    const cardImage = document.createElement("img");
    cardImage.src = pokemonData.sprites.other.dream_world.front_default
    card1Img.append(cardImage)
    card1Name.textContent = pokemonData.name;
    card1Experience.textContent = pokemonData.base_experience;
    for (let i of pokemonData.abilities) {
        const ability = document.createElement("li");
        ability.textContent = i.ability.name;
        card1Abilities.append(ability);
    }
    c1xp = pokemonData.base_experience;
}
function showBox2(pokemonData) {
    p2_name.textContent = "Alice";
    const cardImage = document.createElement("img");
    cardImage.src = pokemonData.sprites.other.dream_world.front_default
    card2Img.append(cardImage)
    card2Name.textContent = pokemonData.name;
    card2Experience.textContent = pokemonData.base_experience;
    for (let i of pokemonData.abilities) {
        const ability = document.createElement("li");
        ability.textContent = i.ability.name;
        card2Abilities.append(ability);
    }
    c2xp = pokemonData.base_experience;

}
function resetAll() {
    card1Img.textContent = "";
    card2Img.textContent = "";
    card1Name.textContent = "";
    card2Name.textContent = "";
    card1Abilities.textContent = ""
    card2Abilities.textContent = ""
}
function updateScore(xp1, xp2) {
    if (xp1 > xp2) {
        box1Score++;
    }
    else if (xp2 > xp1) {
        box2Score++;
    }
    else {

    }
    // console.log(xp1, xp2)
    renderScore()
}
function renderScore() {
    p1_score.textContent = `Score: ${box1Score}`;
    p2_score.textContent = `Score: ${box2Score}`;
}