// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const container = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1 = document.createElement('h1');
    const tempSpan = document.createElement('span');
//append
    container.append(dateSpan, h1, tempSpan);
//add class
    container.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');
//add content
    dateSpan.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';

    return container
}

let newHeader = document.querySelector('.header-container');
newHeader.appendChild(Header());