function $(el) {
  return document.querySelector(el);
};

function Vent(el, event, func) {
  return el.addEventListener(event, func);
};  

//Magic 8 Ball

    const msgBtn = document.querySelector('#messageBtn');
    const msgField = document.querySelector('#messageField');
    const msgArr = [
      "Yes",
      "No",
      "Maybe",
      "Ask Again...",
      "A Definite \nPossibility",
  ]

  
msgBtn.addEventListener('click', () => {

  const idx = Math.floor(Math.random() * msgArr.length);
  const randomIndex = msgArr[idx];

  $('#eightballimgdiv').classList.add('shake');
  
  setTimeout(() => {
    $('#eightballimgdiv').classList.remove('shake');
    msgField.textContent = randomIndex;

    msgField.className = ""; 
    msgField.classList.add(`ans-${idx}`);
  }, 1300);

});

//Color Mixer

const preview = $('#preview');
let redValue = 0
let greenValue = 0
let blueValue = 0
const previewColor = [redValue, greenValue, blueValue]
preview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

$('#c-red').addEventListener('click', () => {
  
  redValue = redValue + 20;
  
  preview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  
});  



$('#c-green').addEventListener('click', () => {

greenValue = greenValue  + 20;  

preview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

});



$('#c-blue').addEventListener('click', () => {

blueValue = blueValue + 20;  

preview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

});

$('#c-redm').addEventListener('click', () => {
  
  redValue = redValue - 20;
  
  preview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  
});  



$('#c-greenm').addEventListener('click', () => {

greenValue = greenValue  - 20;  

preview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

});



$('#c-bluem').addEventListener('click', () => {

blueValue = blueValue - 20;  

preview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

});


//whiteboard section
//1
const countWB = $('#countWB');
const displayWB = $('#displayWB');
let scoreWB = 0

countWB.addEventListener('click', () => {
  scoreWB++;
  displayWB.textContent = scoreWB;
})

//section... one?

const btn = $('#send');
const feed = $('#feed');
const msgInput = $('#msgInput');

btn.addEventListener('click', () => {
  const type = document.querySelector('#msgType');
const selected = type.value;    
if (msgInput.value === "") {
  const p = document.createElement('p');
  p.innerText = 'Please type something first.';
  p.classList.add('warning');
  feed.appendChild(p);
}    
else {
  const p = document.createElement('p');
  p.innerText = msgInput.value
  p.classList.add(selected);
  feed.appendChild(p);
  msgInput.value = "";
}    

});




//section 2 
const pArray = [
  "Milotic",
  "Raichu",
  "Blastoise",
  "Mudkip",
  "Mewtwo",
  "Pikachu",
  "Pichu",
  "Staraptor"
];    

const logBtn = $('#sendLogNames');

logBtn.addEventListener('click', () => {
  const index = Math.floor(Math.random() * Array.length);
  const pokemon = pArray[index];
  console.log(pokemon);
  alert("You have logged a Pokemon in the console!"); 
});    

//function B
let angleTwo = 0;

function rot() {
  angleTwo += 15;
  document.querySelector('#square').style.transform = `rotate(${angleTwo}deg)`;
}    

document.querySelector('#spined').addEventListener('click', rot);

const growB = $('#growB');
const square = $('#square');
loopG = null;
let size = 50

growB.addEventListener('mousedown', () => {
 loopG = setInterval (() => {
size++;      
square.style.width = size + 'px';
square.style.height = size + 'px';
}, 100);
});

growB.addEventListener('mouseup', () => {
  clearInterval(loopG);
});    

growB.addEventListener('mouseleave', () => {
  clearInterval(loopG);
})    




//section 3 


  const timerBtn = $('#timer');
  timerBtn.addEventListener('click', () =>{ 
let count = 5;        
const timer = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    console.log("GO!");
    clearInterval(timer);
  }    
}, 1000);    
  });

  //function B 

  // xy tracking mouse and logging to console

// document.addEventListener('mousemove', (e) => {
//   console.log('X:', e.clientX, 'Y:', e.clientY);    
// });

//key down

document.addEventListener('keydown', (e) => {
  if (e.key === 's') {
    console.log('Saving...');
  }    
});    


//function B

const ul = $('ul');

ul.addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    console.log(e.target.textContent);
    e.target.classList.add('selected');
    e.target.style.color = 'blue'
  }    
});    






  //section 5

  const enemyBtn = $('#enemyBtn');
  const enemyDisplay = $('#enemyDisplay');
  const enemyArr = ['Green Enemy', 'Red enemy', 'Purple enemy']

  enemyBtn.addEventListener('click', () => {
    let index = enemyArr[Math.floor(Math.random()*enemyArr.length)];
    enemyDisplay.textContent = index;
  });  


//section 6  

let countSix = 0;
const countBtn = $('#countBtn');
const countDisplay = $('#countDisplay');
const resetBtn = $('#resetBtn');

countBtn.addEventListener('click', () => {
  countSix++;
  countDisplay.textContent = countSix;
});  


resetBtn.addEventListener('click', () => {
countSix = 0  
countDisplay.textContent = countSix;
});


//function B

let count = 0;        // your number
let loop = null;      // your worker ID

const hold = $('#hold');     // your button
const numSix = $('#numSix'); // your display

hold.addEventListener('mousedown', () => {
  loop = setInterval(() => {
    count++;
    numSix.textContent = count;
  }, 100);  
});  

hold.addEventListener('mouseup', () => {
  clearInterval(loop);
});  
hold.addEventListener('mouseleave', () => {
  clearInterval(loop);
});  



//section 7

let health = 100

const dmgBtn = $('#damageBtn');
const healBtn = $('#healBtn');
const rstHpBtn = $('#resetHpBtn');
const hpDisplay = $('#hpDisplay');

dmgBtn.addEventListener('click', () => {
  health = health - 10;
  hpDisplay.textContent = health;
});  

healBtn.addEventListener('click', () => {
  health = health + 5;
  hpDisplay.textContent = health;
});  

rstHpBtn.addEventListener('click', () => {
  health = 100;
  hpDisplay.textContent = health;
});  




//9 



//
const rollBtn = $('#rollBtn');
const diceResult = $('#diceResult');
const arr = [1, 2, 3, 4, 5, 6]

rollBtn.addEventListener('click', () => {
let index = arr[Math.floor(Math.random() * arr.length)];
diceResult.textContent = index;
});





// section 11 //
//function A
const togBtn = $('#toggle');
const panelEleven = $('#panel');

Vent(togBtn, 'click', () => {
  panelEleven.classList.toggle('hidden');
});
// function B


const fadeBtn = $('#fade');  // the button
const msg = $('#msg');       // the text

let loopM = null;
let fade = 1;                // the opacity number (this one changes)

fadeBtn.addEventListener('mousedown', () => {
  loopM = setInterval(() => {
    fade -= 0.01;
    if (fade < 0) fade = 0;

    console.log(fade);

    msg.style.opacity = fade;
  }, 50);
});

fadeBtn.addEventListener('mouseup', () => {
  clearInterval(loopM);
});

fadeBtn.addEventListener('mouseleave', () => {
  clearInterval(loopM);
});



// funtion C

const red = $('#red');
const blue = $('#blue');
const boxChange = $('#boxChange');

red.addEventListener('click', () => {
  boxChange.style.backgroundColor = "red";
});

blue.addEventListener('click', () => {
  boxChange.style.backgroundColor = "blue";
});

//12 section

const tileArea = document.querySelector('#tileArea');
const makeTiles = document.querySelector('#makeTiles');

makeTiles.addEventListener('click', () => {
  tileArea.innerHTML = ""; // clear old tiles

  for (let i = 1; i <= 5; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.index = i;
    tile.textContent = i;
    tileArea.appendChild(tile);
  }
});

tileArea.addEventListener('click', (e) => {
  const tile = e.target.closest('.tile');
  if (!tile) return;

  tile.classList.toggle('selected');
});

//my version 

const makeTilesTwo = $('#makeTilesTwo');
const tileAreaTwo = $('#tileAreaTwo')

makeTilesTwo.addEventListener('click', () => {
  for (let i = 1; i <= 3; i++) {
    const divTile = document.createElement('div');
    divTile.classList.add('tile');
    divTile.textContent = i;
    divTile.dataset.index = i;// ??
    tileAreaTwo.appendChild(divTile);
  }

});

$('#tileAreaTwo').addEventListener('click', (e) => {
  const tile = e.target.closest('.tile');
  if (!tile) return;

  tile.classList.toggle('selected');
 if (tile.classList.contains('selected')) {
  tile.textContent = 'clicked!';
 } else {
  tile.textContent = tile.dataset.index;
 }


});

const clearTiles = $('#clearTiles');

clearTiles.addEventListener('click', () => {
     tileArea.textContent = "";
  tileAreaTwo.textContent = "";
})

//13

const livePreview = $('#inputLive');
const previewArea = $('#previewArea');

livePreview.addEventListener('input', () => {
  previewArea.textContent = livePreview.value;
})

//14 

  const slider = $('#slider');
  const slideText = $('#slideText');

  slider.addEventListener('input', () => {
    let pixelValue = 20;
    pixelValue = slider.value;
    slideText.style.fontSize = pixelValue + 'px';
  });



  //15
  

  //attempt at funcitoning 


  const appendBtn = $('#appendBtn');
  const appendList = $('#appendList');
  const appendInput = $('#appendInput');
  const appendClear = $('#appendClear');

function makeEditable(li) {
  li.addEventListener('click', () => {
    const input = document.createElement('input');
    input.value = li.textContent;

    li.replaceWith(input);

    input.addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
        const newLi = document.createElement('li');
        newLi.textContent = input.value;

        input.replaceWith(newLi);
        makeEditable(newLi);   // ← reattach behavior
      }
    });

input.addEventListener('blur', () => {
  if (!document.body.contains(input)) return; // input already replaced

  const newLi = document.createElement('li');
  newLi.textContent = input.value;

  input.replaceWith(newLi);
  makeEditable(newLi);
});

  });
}


appendBtn.addEventListener('click', () => {
  if (appendInput.value === "") {
    alert('writing input appends it list!');
  }
  else {
    const li = document.createElement('li');
    li.textContent = appendInput.value;
    makeEditable(li);
    appendList.appendChild(li);
  }

  appendInput.value = "";


});

appendInput.addEventListener('keydown', (e) => {
 if(e.key === "Enter"){
 
  if (appendInput.value === "") {
    alert('writing input appends it list!');
  }
  else {
    const li = document.createElement('li');
    li.textContent = appendInput.value;
    makeEditable(li);
    appendList.appendChild(li);
  }
  appendInput.value = "";
}


});





  appendClear.addEventListener('click', () => {
    appendList.innerHTML = "";
    const appendBubble = document.createElement('div');
    appendBubble.textContent = 'List Cleared';
    appendList.appendChild(appendBubble);    
    setTimeout(() => {
      appendBubble.remove();
    }, 2000)
    
  });
  
  
//


function createSection() {
  const section = document.createElement('section');
  section.innerHTML = `<h2>Placeholder</h2>
  <div class='blankDiv'></div>
  <textarea class='sectionInput'></textarea>
  <button class='editSection'>edit</button>
  <button class='deleteSection'>delete</button>`;
  $('main').appendChild(section); 
  section.querySelector('.deleteSection').addEventListener('click', () => {
    section.remove();
  })
  const textarea = section.querySelector('.sectionInput');
    section.querySelector('.editSection').addEventListener(('click'), () => {
 section.querySelector('.blankDiv').innerHTML = textarea.value;
})
return section;
};

$('#appendSection').addEventListener('click', () => {
  createSection();
})



