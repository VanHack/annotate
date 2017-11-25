# Annotate #

[ **Nov 2017 Vanhackathon Submission** ]  
Create annotations for html articles and share them with the community.

The app is hosted live on **[Heroku](https://annotate-app.herokuapp.com)**

## Table of Contents ##

- [Installation and running](#installation-and-running)
  - [Available scripts](#available-scripts)
    - [npm start](#npm-start)
    - [npm teste](#npm-test)
    - [npm run build](#npm-run-build)
- [Review](#review)
  - [What is included](#whats-is-included)
  - [What is missing](#whats-is-missing)

-------------------

## Installation and running ##

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).  
You can use the default react-scripts scripts:

### Available Scripts ###

In the project directory, you can run:

#### `npm start` ####

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

#### `npm test` ####

Launches the test runner in the interactive watch mode.  
`npm run test -- --coverage` will display total coverage

#### `npm run build` ####

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Review ##

### What is implemented ###

- Loads multiple HTML articles from JSON asynchronously

- Permits annotations  
(Uses the public Hypothes.is API, as that adds more value to the app rather than a mocked version)

- Unit tests and good practices

- Deployed to **[Heroku](https://annotate-app.herokuapp.com)**

### What is missing ###

- Does not load PDF articles  

(Due to numerous problems with CORS and conflicts between react router, hypothes.is and iframes)

### Excuses ###

- I'm working full time and taking 9 courses at university this semester

- I had a test on the last day of the challenge so this entire thing was implemented between friday night and saturday night  
(I did not sleep)

- This was my first time making a proper react-redux app