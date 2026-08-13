//semi-global variable//
function writeOutput(message) {
  document.getElementById("outputBox").innerHTML += message + "<br>";
}


//functions for run sandbox tests button//
document.getElementById("runTests").addEventListener("click", () => {
  greetStandard();
  listGenericStats();
  writeOutput("Check console")
  console.log("Missing functions, please continue to learn functions ad add here...");
})
function greetStandard() {
  writeOutput("Welcome to my Javascript Sandbox!");
  console.log("User was greeted with generic message");

}

function listGenericStats() {
  writeOutput("Your starting stats are Strength:7 Dexterity:9 Intelligence:13");
  console.log("User receieved stat list");

}

//function to clear output box//
function logEvent(text) {
  const entry = document.createElement("p");
  entry.textContent = text;
  outputBox.appendChild(entry);

  setTimeout(() => entry.remove(), 2000);
}


document.getElementById("clearSandbox").addEventListener("click", () => {
  document.getElementById("outputBox").innerHTML = "";
  logEvent("You cleared dude");
  logEvent("Try again!");

});
//end function//

//elements for greet button//


document.getElementById("greetBtn").addEventListener("click", () => {
 let nameInput = document.getElementById("nameInput").value;
let message = "Hello, " + nameInput;
  if (document.getElementById("nameInput").value === "") {
        writeOutput("Please enter a name for a personalized greeting.");
  }
  else
    {
    writeOutput(message);
    console.log("User was greeted with personalized message");

  }

}); 



//console cheet  sheet//

const el = document.createElement("div");
el.textContent = "I exist temporarily!";
outputBox.a(el);

setTimeout(() => {
  el.remove();
}, 3000);



  
