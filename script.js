//Helper Functions//
function $(selector) {
return document.querySelector(selector);
};

/*quick templates
const input = $('#');
const btn =  $('#');
const feed = $('#');
*/

//div change  warm up//
const box = $('#box');

box.addEventListener('click', () => {
  box.classList.toggle('active');
});

//
const floatBtn = $('#floatBtn');

floatBtn.addEventListener('mouseenter', () => {
  floatBtn.classList.add('floating');
});

floatBtn.addEventListener('mouseleave', () => {
  floatBtn.classList.remove('floating');
});

//
const addItem = $('#addItem');
const list = $('#list');

addItem.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'Item X';
list.appendChild(li);
li.offsetHeight; // forces layout
li.classList.add('show');


})

//end 


// ?clock funcitonality ?//
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();

    //end clock//



    //type message 1 excercise 
const msgInput = $('#msgInput');
const sendMsg =  $('#sendMsg');
const msgFeed = $('#msgFeed');

sendMsg.addEventListener('click', () => {
  if (msgInput.value === "") {
    msgFeed.innerText = "Please type something first.";
  }
else {
  const p = document.createElement('p');
  p.innerText = msgInput.value;
  msgFeed.appendChild(p);
  msgInput.value = "";

}
});