//helper functions

function $(element) {
  return document.querySelector(element);
};

function normalizeID(str) {
  return str.replace(/\s+/g, "").toLowerCase();
}


//




let pokemonData = [];

fetch("/Pages/Pokemon/pokemonData.json")
  .then(res => res.json())
  .then(data => {
    console.log("Loaded JSON:", data);
    pokemonData = data;
  })
  .catch(err => console.error("JSON load error:", err));


function findVacantCard() {
  const cards = document.querySelectorAll('.pokemon-card');

  for (const card of cards) {
    const nameField = card.querySelector('.poke-name');
    if (nameField.textContent === "Name") {
      return card;
    }
  }

  return null;
}



//fill card

function fillCard(card, data) {
  // name
  card.querySelector('.poke-name').textContent = data.name;

  // type
  card.querySelector('.poke-type').textContent = data.type.join(" / ");

  // sprite
  card.querySelector('.poke-sprite').src = data.sprite;

  // stats
  card.querySelector('.hp').textContent = `HP: ${data.stats.hp}`;
  card.querySelector('.atk').textContent = `ATK: ${data.stats.atk}`;
  card.querySelector('.def').textContent = `DEF: ${data.stats.def}`;
  card.querySelector('.spa').textContent = `SPA: ${data.stats.spa}`;
  card.querySelector('.spd').textContent = `SPD: ${data.stats.spd}`;
  card.querySelector('.spe').textContent = `SPE: ${data.stats.spe}`;

  // ability
  card.querySelector('.poke-ability').textContent = data.ability;

  // moves

const moveSlots = card.querySelectorAll(".move-slot");

moveSlots.forEach(slot => {
  slot.innerHTML = ""; // clear old options

  data.movePool.forEach(move => {
    const option = document.createElement("option");
    option.value = move;
    option.textContent = move;
    slot.appendChild(option);
  });
});

// MEGA BUTTON (dynamic)
const megaSlot = card.querySelector('.mega-slot');
megaSlot.innerHTML = ""; // clear previous button

if (data.mega) {
  const btn = document.createElement("button");
  btn.classList.add("mega-toggle");
  btn.textContent = "Mega";

  megaSlot.appendChild(btn);
}




};


///



document.addEventListener('click', (e) => {
  if (!e.target.matches('.mega-toggle')) return;

  const card = e.target.closest('.pokemon-card');
  const name = card.querySelector('.poke-name').textContent.trim();

  const data = pokemonData.find(p => p.name === name);
  if (!data) return;

  const usingMega = e.target.classList.toggle('active');

  // Choose which form to use
  const form = usingMega ? {
    sprite: data.megaSprite || data.sprite,
    type: data.megaType || data.type,
    ability: data.megaAbility || data.ability,
    stats: data.megaStats || data.stats
  } : {
    sprite: data.sprite,
    type: data.type,
    ability: data.ability,
    stats: data.stats
  };

  // Update sprite
  card.querySelector('.poke-sprite').src = form.sprite;

  // Update typing
  card.querySelector('.poke-type').textContent = form.type.join(" / ");

  // Update ability
  card.querySelector('.poke-ability').textContent = form.ability;

  // Update stats
  card.querySelector('.hp').textContent = `HP: ${form.stats.hp}`;
  card.querySelector('.atk').textContent = `ATK: ${form.stats.atk}`;
  card.querySelector('.def').textContent = `DEF: ${form.stats.def}`;
  card.querySelector('.spa').textContent = `SPA: ${form.stats.spa}`;
  card.querySelector('.spd').textContent = `SPD: ${form.stats.spd}`;
  card.querySelector('.spe').textContent = `SPE: ${form.stats.spe}`;
});




///


let selectedCard = null;

//
function restoreIcon(nameid) {
    const icon = document.querySelector(`[data-id="${nameid}"]`);
    if (!icon) return;
    icon.style.display = "block";
}



//pokemon icon click handler

document.querySelectorAll('.pokemon-icon').forEach(icon => {
  icon.addEventListener('click', () => {
  const id = icon.dataset.id.trim();
const data = pokemonData.find(p => p.name === id);

    let card;

    if (selectedCard) {
      const oldName = selectedCard.querySelector('.poke-name').textContent;
      restoreIcon(oldName.trim());
      card = selectedCard;

      selectedCard.style.backgroundColor = "";
      selectedCard = null;
    } else {
      card = findVacantCard();
      // selectedCard = card;
    }

    fillCard(card, data);

    // HIDE THE CORRECT ICON
const correctIcon = document.querySelector(`[data-id="${data.name}"]`);
    if (correctIcon) correctIcon.style.display = "none";
  });
});



//select card logic





document.querySelectorAll('.pokemon-card').forEach(card => {
  card.addEventListener('click', () => {

    if (selectedCard === card) {
      // toggle OFF
      selectedCard = null;
      card.style.backgroundColor = ""; // remove highlight
      return;
    }

    // toggle ON
    if (selectedCard) {
      selectedCard.style.backgroundColor = ""; // remove old highlight
    }

    selectedCard = card;
    card.style.backgroundColor = "yellow"; // highlight new one
  });
});


function clearCard(card) {
   selectedCard = null;
   const holdName = card.querySelector('.poke-name').textContent;
   card.style.backgroundColor = "";
 card.innerHTML = `
 <div class="poke-header">
  <div class="poke-name">Name</div>
  <div class="poke-type">Type</div>
</div>

<div class="poke-image">
  <img class="poke-sprite" src="" alt="">
</div>

<div class="poke-stats">
  <div class="stat hp">HP: 0</div>
  <div class="stat atk">ATK: 0</div>
  <div class="stat def">DEF: 0</div>
  <div class="stat spa">SPA: 0</div>
  <div class="stat spd">SPD: 0</div>
  <div class="stat spe">SPE: 0</div>
</div>

<div class="poke-moves">
  <select class="move-slot"></select>
  <select class="move-slot"></select>
  <select class="move-slot"></select>
  <select class="move-slot"></select>
</div>

<div class="poke-ability">Ability</div>

<div class="mega-slot"></div>

<div class="poke-nature">
  <select class="nature-slot"></select>
</div>

`;

restoreIcon(holdName);
 
  };


document.addEventListener(('keydown'), (e) => {
  if (e.key === "x" && selectedCard !== null) {
    clearCard(selectedCard);
  }
});


document.querySelectorAll('.move-slot, .nature-slot').forEach(el => {
  el.addEventListener('change', (e) => {
    e.stopPropagation();
  });
});

document.querySelectorAll('.move-slot, .nature-slot').forEach(el => {
  el.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});


document.querySelector(".sidebar-toggle").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});

