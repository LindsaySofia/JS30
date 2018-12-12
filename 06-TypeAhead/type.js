const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// Put cities from endpoint into a large array
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));

// Given a word, find the corresponding cities that match it
function findMatches(wordToMatch, cities) {
  // new RegEx(wordToMatch, 'gi') => string.match(regex)
  const matches = cities.filter(city => city.city.toLowerCase().includes(wordToMatch) || city.state.toLowerCase().includes(wordToMatch));
  return matches;
}

// Show our matches
function showMatches(matches) {
  let resultsContainer = document.querySelector('.result-container');
  while (resultsContainer.firstChild) {
    resultsContainer.removeChild(resultsContainer.firstChild);
  }
  matches.forEach(city => {
    let li = document.createElement('li');
    li.classList.add('result');
    li.innerHTML = `<span>${city.city}, ${city.state}</span><span>${city.population}</span>`;
    resultsContainer.appendChild(li);
  });
}





