//Helper Function//

function $(element) {
  return document.querySelector(element);
};
 


// Experiment 1: Toggle text

let toggleBtn = $("#toggleBtn")
let toggleOutput = $("#toggleOutput")

toggleBtn.addEventListener("click", () => {
  toggleOutput.textContent =
    toggleOutput.textContent === "Clicked!" ? "" : "Clicked!"
    log('Experiment One: Test Fired');
});



// Experiment 2: Counter
let count = 0
let countBtn = $("#countBtn");
let countOutput = $("#countOutput");

countBtn.addEventListener("click", () => {
  count++
  countOutput.textContent = count
  log('Experiment Two: Test Fired');
});



// Experiment 3: Random Color Box
let colorBox = $("#colorBox");

colorBox.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  log('Experiment Three: Test Fired');
});

//Experiment 4//

function beGoneNoti() {
  const vanishingNoteOne = document.createElement("p");
  vanishingNoteOne.textContent = "I will vanish soon.";
  outputBoxSilly.appendChild(vanishingNoteOne);

  setTimeout(() => vanishingNoteOne.remove(), 2000);
}

function showAlertTwo() {
  const alertTwo = document.createElement("div");
  alertTwo.textContent = "Click to dismiss";
  alertTwo.style.cursor = "pointer";
  outputBoxSilly.appendChild(alertTwo);

  alertTwo.addEventListener("click", () => alertTwo.remove());
}

function showTempMessageThree() {
  const tempThree = document.createElement("p");
  tempThree.textContent = "This message will disappear in 2 seconds.";
  tempThree.style.color = "orange";
  outputBoxSilly.appendChild(tempThree);

  setTimeout(() => tempThree.remove(), 2000);
}

$("#runTests").addEventListener("click", () => {
  beGoneNoti();
  showAlertTwo();
  showTempMessageThree();
  log('Experiment 4: Test Fired');

});




// Experiment 5 //

const btnFive = $('#changeFive');
const msgFive = $('#msgFive');

btnFive.addEventListener('click', () => {
  if (msgFive.textContent === "Original"){
    msgFive.textContent = "Updated!";
  }
  else {
    msgFive.textContent = "Original";
  }
  log('Experiment 5- Test Fired')
  
});



//Final Experiment : Dom Playground

// Helpers
const log = msg => {
  const area = $('#logArea');
  area.textContent = area.textContent + `\nSystem Event: ${msg}... ${new Date().toLocaleTimeString()}`;
  area.scrollTop = area.scrollHeight;
};


// Create tiles and attach delegated listener
const grid = $('#tileGrid');

$('#makeTiles').addEventListener('click', () => {
  grid.innerHTML = '';
  for (let i = 1; i <= 9; i++) {
    const gbp = document.createElement('div');
    gbp.classList.add('tile');
    gbp.dataset.index = i;
    gbp.textContent = i;
    grid.appendChild(gbp);
  }
  log('Created 9 tiles');
});

// Clear
$('#clearTiles').addEventListener('click', () => {
  grid.innerHTML = '';
  log('Cleared tiles');
});

// Event delegation for clicks on tiles
grid.addEventListener('click', (e) => {
  const tile = e.target.closest('.tile');
  if (!tile) return; // clicked outside a tile
  tile.classList.toggle('selected'); // CSS based toggle
  const selected = tile.classList.contains('selected');
  tile.textContent = selected ? 'Selected' : tile.dataset.index;
  log(`Tile ${tile.dataset.index} ${selected ? 'selected' : 'deselected'}`);
});

//clear log button built by kevin 
const logArea = $('#logArea');
const clearLog = $('#clearLog');

clearLog.addEventListener('click', () => {
  logArea.textContent = "";
});

//reset button logic//

const resetBtn = $('#resetAll');

resetBtn.addEventListener('click', () => {
  resetBtn.classList.add('reset-flash');
  setTimeout(() => resetBtn.classList.remove('reset-flash'), 400);

  // Reset Experiment 1: Toggle
  $('#toggleOutput').textContent = "";

  // Reset Experiment 2: Counter
  count = 0;
  $('#countOutput').textContent = "0";

  // Reset Experiment 3: Color Box
  $('#colorBox').style.backgroundColor = "lightgray";

  // Reset Experiment 4: Tiles
  $('#tileGrid').innerHTML = "";

  // Reset Log
  $('#logArea').textContent = "";

  // Reset outputBoxSilly
  $('#outputBoxSilly').innerHTML = `
    <p>Run my Test For Changes to this that or not<br></p>
  `;

  // Log the reset
  log("— SYSTEM RESET — All experiments restored to default state");
});

//end
