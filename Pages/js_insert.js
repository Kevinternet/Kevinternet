//3 buttons one is correct, then once selected
//  correct/incorrect  is displayed. and 
//the 'correct' button changes. correct button does not repeat 
//position


const buttons = document.querySelectorAll('.guess');
const result = document.querySelector('#result');

let correctIndex = Math.floor(Math.random() * 3);

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {

    if (index === correctIndex) {
      result.textContent = "Correct!";
    } else {
      result.textContent = "Wrong!";
    }

    // pick a new correct button
    let newCorrect = Math.floor(Math.random() * 3);
    while (newCorrect === correctIndex) {
      newCorrect = Math.floor(Math.random() * 3);
    }

    correctIndex = newCorrect;
  });
});
//  HTML
//      <button class="guess">Button 1</button>
// <button class="guess">Button 2</button>
// <button class="guess">Button 3</button>

// <div id="result"></div>


///end