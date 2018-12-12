const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// Put cities from endpoint into a large array
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));

function resetChildren() {
  let resultsContainer = document.querySelector('.result-container');
  
  let initialChildrenHTML = `
    <li class="result">Filter For A City</li>
    <li class="result">Or A State</li>
  `;
  
  resultsContainer.innerHTML = initialChildrenHTML;
}

// Given a word, find the corresponding cities that match it
function findMatches(wordToMatch, cities) {
  const regex = new RegExp(wordToMatch, 'gi');
  const matches = cities.filter(city => regex.test(city.city) || regex.test(city.state));
  return matches;
}

// Show our matches
function showMatches() {
  if (!this.value) {
    resetChildren();
    return;
  }
  let resultsContainer = document.querySelector('.result-container');
  const matches = findMatches(this.value, cities);
  let matchesHTML = matches.map(city => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = city.city.replace(regex, `<span class="highlight">${this.value}</span>`);
    const stateName = city.state.replace(regex, `<span class="highlight">${this.value}</span>`);
    return `
      <li class="result">
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${city.population}</span>
      </li>
    `;
  }).join('');

  resultsContainer.innerHTML = matchesHTML;
}

document.querySelector('.search').addEventListener('input', showMatches);

resetChildren();




