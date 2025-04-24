
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

function randomYear() {
  // Get all available years from the eventsByYear object
  const availableYears = Object.keys(eventsByYear);
  
  // Select a random year from the available years
  const randomIndex = Math.floor(Math.random() * availableYears.length);
  const randomYear = availableYears[randomIndex];
  
  // Update the input field with the random year
  document.getElementById('yearInput').value = randomYear;
  
  // Show the events for this random year
  showEvents();
}
