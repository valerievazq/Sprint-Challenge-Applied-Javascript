// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const data = axios.get('https://lambda-times-backend.herokuapp.com/articles');

//function
let createCard = (data) => {
    const card = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("span");
//append children
    card.append(title, author);
    author.appendChild(imgDiv);
    imgDiv.appendChild(img);
    author.appendChild(name);
//add classes
    card.classList.add("card");
    title.classList.add("headline");
    author.classList.add("author");
    imgDiv.classList.add("img-container");
    img.classList.add("img");
    name.classList.add("img");
//add info
    title.textContent = data.headline;
    img.src = data.authorPhoto;
    name.textContent = data.authorName;

    return card;

}


let card = document.querySelector('.cards-container');

data.then((response) => {
    let articles = Object.values(response.data.articles);
    articles.forEach((item) => {
        let text = item;

        text.forEach((el) => {
            let end = createCard(el);
            card.appendChild(end);
        })
    })
})