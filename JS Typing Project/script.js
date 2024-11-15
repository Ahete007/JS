const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const quoteApi = "https://dummyjson.com/quotes";
const arrayOfQuotes = [];
const timerElement = document.getElementById("timer");

function getQuotes() {
  return fetch(quoteApi)
    .then((response) => response.json())
    .then((data) => data.quotes);
}

async function getNextQuote() {
  const quotes = await getQuotes();
  quotes.forEach((q) => {
    arrayOfQuotes.push(q.quote);
  });
  renderQuote(getNextQuoteFromArray());
}

function getNextQuoteFromArray() {
  return arrayOfQuotes[Math.floor(Math.random(0, 100) * arrayOfQuotes.length)];
}

function renderQuote(quote) {
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const charSpanElement = document.createElement("span");
    charSpanElement.innerText = character;
    quoteDisplayElement.appendChild(charSpanElement);
  });
  quoteInputElement.value = null;
  startTimer();
}

quoteInputElement.addEventListener("input", (event) => {
  const quoteArray = quoteDisplayElement.querySelectorAll("span");
  const inputArray = quoteInputElement.value.split("");
  let correct = true;

  quoteArray.forEach((character, index) => {
    const inputCharacter = inputArray[index];
    if (inputCharacter == null) {
      character.classList.remove("correct");
      character.classList.remove("incorrect");
      correct = false;
    } else if (inputCharacter === character.innerText) {
      character.classList.add("correct");
      character.classList.remove("incorrect");
    } else {
      character.classList.add("incorrect");
      character.classList.remove("correct");
      correct = false;
    }
  });
  if (correct) {
    renderQuote(getNextQuoteFromArray());
  }
});

let startTime;
function startTimer() {
  timerElement.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}
//getNextQuote();
