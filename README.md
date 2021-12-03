# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [ ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [ ] Open the assignment in Canvas and click on the "Set up git" option.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Lambda Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

### Instructions

- [ ] Navigate to the root of the project with your command line.
- [ ] Run `npm install` to download the dependencies listed in the `package.json` file.
- [ ] Run `npm start` to compile the project and serve it.
- [ ] Navigate Chrome to `http://localhost:3000`
- [ ] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [ ] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [ ] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [ ] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the *main* branch.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Demonstrate your understanding of this week's concepts by answering the following questions:

1. What is the DOM?

The DOM (document object model) is a Javascript object (with key:value pairs) that contains every element on a page. It is a representation of the various objects that comprise of the structure/content of a document on the web. It is a programming interface for web documents and a way for humans to interface with the browser.

2. What is an event?

An event is is a way that web users can interact with a webpage. Each time there is user interaction with the page, whether it be a click or mouseover or other cut/copy/wheeldown, this is considered an event. 

3. What is an event listener?

When an event happens on an element, it can be tracked or have another action taken. This action is called an event listener. For example, to add an event listener to an element for a click, you would write: element.addEventListener('click', callback).  You could also add event listeners through inline styling or by utilizing attributes in the dom object.

4. Why would we convert a NodeList into an Array?

We should convert a NodeList into an Array because a NodeList is a collection of DOM nodes which are extracted from the HTML document, whereas an array is a data-type. In order for access the data in the array, we must convert the NodeList into an array first. We can't access this data directly. To convert to an array you would use the 'Array.from()' method.

5. What is a component?

A component is an independent and reusable piece of code that can be used to build elements with similar functionality and styling. The purpose of components is for reusability. A component is basically a function.