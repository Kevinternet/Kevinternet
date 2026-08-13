window.onload = () => {
   // all your code here
   
   
   // Global Helper(s) 
   function $(el) {
     return document.querySelector(el);
   }
    // creation of dom elements
    //const  = $('#')
    const coinBtn = $('#coinBtn');
    const enemyBtn = $('#enemyBtn');
    const secretBtn = $('#secretBtn');
    const scoreDisplay = $('#scoreDisplay');
    const coinOne = $('.coinOne');
    const player = $('#player');
    const gravityForce = 1;
    let playerGrounded = true;


//scoring logic

//score system function//
function scoreSystem() {
  let score = 0;

  function collectCoin() {
    score++;
  }

  function defeatEnemy() {
    score = score + 10;
  }

  function findSecret() {
    score = score + 5;
  }

function getScore(){
  if (scoreDisplay) {
    scoreDisplay.textContent = "Score: " + score;
  }
}

  return { collectCoin, defeatEnemy, findSecret, getScore };
}


totalScore = scoreSystem();


coinBtn.addEventListener('click', () =>{
  totalScore.collectCoin();
  totalScore.getScore();
});

enemyBtn.addEventListener('click', () => {
  totalScore.defeatEnemy();
  totalScore.getScore();
});
secretBtn.addEventListener('click', () => {
  totalScore.findSecret();
  totalScore.getScore();
});



function coinPickupHandler(coinElement) {
  coinElement.classList.add('collected');
  totalScore.collectCoin();
  totalScore.getScore();
  
}

coinOne.addEventListener('click', () => {
  coinPickupHandler(coinOne);
});



//physics 

let gravityStrength = 1;

const Gravity = (function () {

  let frozen = true;

  function applyGravity() {
    if (!frozen && !playerGrounded) {
      playerY += gravityStrength      
    }
  }


  function frozenGravity() {
    if (frozen && movementState.jump === true){
      frozen = true;
      playerGrounded = false;
      playerY -= 80;
    }
  }

  function resumeGravity(){
    frozen = false;
  }

  return {applyGravity, frozenGravity, resumeGravity};
})();


//player movement

const rect = player.getBoundingClientRect();
let playerX = rect.left;
let playerY = rect.top;
let gravity = 1.5;
const speed = 5;



const movementState = {
  left: false,
  right: false,
  jump: false
}

  function applyInput() {
  if (movementState.left) playerX -= speed;
  if (movementState.right) playerX += speed;
}

function renderPlayer() {
  player.style.left = playerX + "px";
  player.style.top = playerY + "px";
}




document.addEventListener('keydown', (e) => {
  if (e.key === "ArrowLeft"){
    e.preventDefault();
    movementState.left = true;
  }
  if (e.key === "ArrowUp"){
    e.preventDefault();
    movementState.jump = true;
    Gravity.frozenGravity();
    setTimeout (() => {
      Gravity.resumeGravity();
    }, 500)    
  }  
  if (e.key === "ArrowRight"){
    e.preventDefault();
    movementState.right = true;
  } 
  if (e.key === "ArrowDown"){
    e.preventDefault();
    movementState.down = true;
  }
  

});



document.addEventListener('keyup', (e) => {
  if (e.key === "ArrowLeft"){
    movementState.left = false;
  }

  if (e.key === "ArrowRight"){
    movementState.right = false;
  } 

});



function applyGroundCollision() {
  const groundHeight = 850;
  if (playerY > groundHeight - 80) {
    playerY = groundHeight - 80;
    playerGrounded = true;
  }
  else{ 
    playerGrounded = false;
  }
};





function movementLoop() {
  const oldX = playerX;
  const oldY = playerY;


if (!playerGrounded){
  Gravity.applyGravity();
}
if (playerGrounded)
{
  Gravity.frozenGravity();
  movementState.jump = false;
}

  renderPlayer();   // ← your new clean render layer
  applyGroundCollision();
  
  applyInput(); // ← your new clean input layer

  requestAnimationFrame(movementLoop);
}


movementLoop();



  };
