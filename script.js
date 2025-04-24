
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
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
