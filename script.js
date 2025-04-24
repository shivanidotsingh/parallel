
function showEvents() {
  const year = document.getElementById('yearInput').value;
  const event1 = document.getElementById('event1');
  const event2 = document.getElementById('event2');

  if (eventsByYear[year]) {
    const events = eventsByYear[year];
    const [first, second] = shuffle(events).slice(0, 2);
    event1.textContent = first;
    event2.textContent = "Meanwhile, " + second;
  } else {
    event1.textContent = "No data available for this year.";
    event2.textContent = "";
  }

  const color = colorCombos[Math.floor(Math.random() * colorCombos.length)];
  document.body.style.backgroundColor = color.bg;
  document.body.style.color = color.text;

  const button = document.querySelector("button");
  button.style.color = color.text;
}

function shuffle(array) {
  // Create a copy of the array to avoid modifying the original
  const arrayCopy = [...array];
  let currentIndex = arrayCopy.length, randomIndex;
  
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [arrayCopy[randomIndex], arrayCopy[currentIndex]];
  }
  
  return arrayCopy;
}

const colorCombos = [

  { bg: "#CBA0AA", text: "#FAE397" },
  { bg: "#B6CAC0", text: "#C02A1B" },  
  { bg: "#F9F7E8", text: "#62BFAD" },
  { bg: "#6C5B7B", text: "#C06C84" },
  { bg: "#355C7D", text: "#F67280" },
  { bg: "#F3C9DD", text: "#72AEC5" },
  { bg: "#119DA4", text: "#FFC857" },
  { bg: "#20AD65", text: "#FEC8BE" },
  { bg: "#9C9CDD", text: "#CAE9BF" },
  { bg: "#B2B2B2", text: "#E9FF27" },
  { bg: "#8AA9C6", text: "#D1BDFF" },
  { bg: "#393E41", text: "#E94F37" }
];

