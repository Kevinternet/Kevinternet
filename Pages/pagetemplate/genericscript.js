// Helpers
function $(selector) {
  return document.querySelector(selector);
}
function el(element) {
  return document.createElement(element);
}

// Component Factory
function createPanel(title) {
  const panel = el('div');
  panel.className = 'panel';

  const heading = el('h3');
  heading.textContent = title;

  const saveBtn = el('button');
  saveBtn.className = 'save';
  saveBtn.textContent = 'Save';

  const deleteBtn = el('button');
  deleteBtn.className = 'delete';
  deleteBtn.textContent = 'Delete';

  panel.appendChild(heading);
  panel.appendChild(saveBtn);
  panel.appendChild(deleteBtn);

  return panel;
}

// Pokémon list
const pokemonNames = [
  'Milotic', 'Eevee', 'Snorlax', 'Gengar', 'Lapras',
  'Mewtwo', 'Psyduck', 'Jigglypuff', 'Dragonite', 'Lucario'
];

// Sidebar + Panels
const sidebar = $('.sidebar');
const content = $('.content');
const toggleBtn = $('#toggleSidebar');
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

const addPanelBtn = $('#addPanel');
const contentArea = $('#contentArea');
addPanelBtn.addEventListener('click', () => {
  const panel = createPanel('New Panel');
  contentArea.appendChild(panel);
});

// Delegation Helpers
function delegateClick(parentSelector, childSelector, fn) {
  document.querySelector(parentSelector).addEventListener('click', (event) => {
    if (event.target.matches(childSelector)) {
      fn(event);
    }
  });
}

function delegate(parentSelector, eventType, childSelector, fn) {
  document.querySelector(parentSelector).addEventListener(eventType, (event) => {
    if (event.target.matches(childSelector)) {
      fn(event);
    }
  });
}

function delegateMulti(parentSelector, eventType, selectorsMap) {
  document.querySelector(parentSelector).addEventListener(eventType, (event) => {
    for (const selector in selectorsMap) {
      if (event.target.matches(selector)) {
        selectorsMap[selector](event);
      }
    }
  });
}

// Multi-action buttons inside panels
delegateMulti('.content', 'click', {
  '.save': () => console.log('Saving...'),
  '.delete': () => console.log('Deleting...'),
  '.edit': () => console.log('Editing item...')
});

// Pokémon List
const list = $('#list');

// Add initial Pikachu
const listItem = el('li');
listItem.className = 'item';
listItem.textContent = 'Pikachu';
list.appendChild(listItem);

// Add Pokémon button
const addPokemonBtn = $('#addPokemon');
addPokemonBtn.addEventListener('click', () => {
  const name = pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
  const newPoke = el('li');
  newPoke.className = 'item';
  newPoke.textContent = name;
  list.appendChild(newPoke);
});

// Dashboard State
const dashboardState = {
  selectedPokemonElement: null
};

// Selection + Dashboard Update
delegateClick('#list', '.item', (e) => {
  dashboardState.selectedPokemonElement = e.target;

  $('#selectedDisplay2').textContent =
    `Selected Pokémon: ${e.target.textContent}`;

  document.querySelectorAll('#list .item').forEach(item => {
    item.classList.remove('selected');
  });

  e.target.classList.add('selected');
});

// Remove Selected Pokémon
$('#removePokemon').addEventListener('click', () => {
  if (dashboardState.selectedPokemonElement) {
    dashboardState.selectedPokemonElement.remove();
    dashboardState.selectedPokemonElement = null;
    $('#selectedDisplay2').textContent = 'Selected Pokémon: none';
  }
});

// Rename Selected Pokémon
$('#renamePokemon').addEventListener('input', (e) => {
  if (dashboardState.selectedPokemonElement) {
    dashboardState.selectedPokemonElement.textContent = e.target.value;
    $('#selectedDisplay2').textContent =
      `Selected Pokémon: ${e.target.value}`;
  }
});

// Hover
delegate('#list', 'mouseover', '.item', (e) => {
  e.target.classList.add('hovered');
});
delegate('#list', 'mouseout', '.item', (e) => {
  e.target.classList.remove('hovered');
});

// Double-click favorite
delegate('#list', 'dblclick', '.item', (e) => {
  console.log('Favorited:', e.target.textContent);
  e.target.classList.toggle('favorite');
});

// Right-click
delegate('#list', 'contextmenu', '.item', (e) => {
  e.preventDefault();
  console.log('Right-clicked:', e.target.textContent);
});

// Form Delegation
delegate('#formArea', 'input', '.field', (e) => {
  $('#output').textContent = e.target.value;

  if (e.target.value.length < 3) {
    e.target.style.borderColor = 'red';
  } else {
    e.target.style.borderColor = 'green';
  }
});

// Add Field
$('#addField').addEventListener('click', () => {
  const input = el('input');
  input.className = 'field';
  input.placeholder = 'New Field';
  $('#formArea').appendChild(input);
});

