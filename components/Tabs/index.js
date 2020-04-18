// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response.data.topics);
    let responseArray = response.data.topics;
        responseArray.forEach(el => {
            const newT = tabCreator(el)
            topicText.appendChild(newT)
        });
})
    .catch(err => {
        console.log(`There is an error: ${err} ` )
    })

let topicText = document.querySelector('.topics');

function tabCreator(topic){
    const div = document.createElement('div');

    div.textContent = topic;
    div.classList.add('tab')

    return div
}

