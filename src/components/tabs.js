import axios from 'axios';

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
const Tabs = (topics) => {
  const topic = document.createElement('div');
  const java = document.createElement('div');
  const boot = document.createElement('div');
  const tech = document.createElement('div');

  topic.classList.add('topics');
  java.classList.add('tab');
  boot.classList.add('tab');
  tech.classList.add('tab');
  java.textContent = topics[0];
  boot.textContent = topics[1];
  tech.textContent = topics[2];

  topic.appendChild(java);
  topic.appendChild(boot);
  topic.appendChild(tech);

  return topic;
}


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5000/api/topics`)
  .then(response => {
    Tabs(response.data.topics);
    console.log(response);
  }).catch(error => {
    console.error(error);
  }).finally(() => console.log('done'));
  

    // for(let i = 0; i < obj.data.topics.length; i++)

  const tabsAppender = (selector) => {
    const parent = document.querySelector(selector);
    parent.appendChild(Tabs());
  }

  

export { Tabs, tabsAppender }
