import axios from 'axios';
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const Card = (article) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    authorName.textContent = article.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(img);

    card.addEventListener('click', () => {
      console.log(headline.textContent);
    })
    
    return card;
  }



  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  


  const cardAppender = (selector) => {
    axios.get(`http://localhost:5000/api/articles`)
    .then(response => {
      console.log(response.data.articles);
      response.data.articles.bootstrap.forEach(item => {
        document.querySelector(selector).appendChild(Card(item));
      response.data.articles.javascript.forEach(item => {
        document.querySelector(selector).appendChild(Card(item));
      response.data.articles.jquery.forEach(item => {
        document.querySelector(selector).appendChild(Card(item));
      response.data.articles.node.forEach(item => {
        document.querySelector(selector).appendChild(Card(item));
      response.data.articles.technology.forEach(item => {
        document.querySelector(selector).appendChild(Card(item));
        })})})})})
    }).catch(error => {
      console.error(error);
    }).finally(() => console.log('done'));
  }


export { Card, cardAppender }
