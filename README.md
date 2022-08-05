# My Portfolio

<p align="center">
<img src="https://raw.githubusercontent.com/PhantomScript/asset-container/b26b0ebaaa13bec7fac796ee0b8296676df6ee0b/developer-portfolio/website.svg" alt="" width="450px"/>
</p>

<br />

# Installation

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

## Also check [this](https://reactjs.org/docs/create-a-new-react-app.html) out if you are new to react

#### Make sure you have the latest version of both Git and Node on your computer

```
node --version
git --version
```

<br />

# Getting Started

### Fork and Clone the repo

#### To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone hhttps://github.com/<YOUR GITHUB USERNAME>/kmk-portfolio.git
cd kmk-portfolio
```

### Install packages from the root directory

```
npm install
```

#### or

```
yarn install
```

### Start the development server

```
npm start
```

#### or

```
yarn start
```

<br />

# Hosting

## Netlify

| Site   | Docs  | Demo  |
| :-------------: |:-------------: |:-------------: |
| [Netlify](https://www.netlify.com/) | [3 ways to deploy React apps to Netlify](https://blog.logrocket.com/3-ways-to-deploy-react-apps-to-netlify/) | [Youtube](https://www.youtube.com/watch?v=sGBdp9r2GSg) |

## Firebase

| Site   | Docs  | Demo  |
| :-------------: |:-------------: |:-------------: |
| [Firebase](https://firebase.google.com/docs/hosting) | [Deploy a React App with Firebase](https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425) | [Youtube](https://www.youtube.com/watch?v=1wZw7RvXPRU) |

## Heroku

| Site   | Docs  | Demo  |
| :-------------: |:-------------: |:-------------: |
| [Heroku](https://www.heroku.com/) | [Deploying React App on Heroku from GitHub](https://medium.com/make-it-heady/deploying-create-react-app-on-heroku-from-github-49447561f670) | [Youtube](https://www.youtube.com/watch?v=dn4mmfbletg) |

## Github Pages

| Site   | Docs  | Demo  |
| :-------------: |:-------------: |:-------------: |
| [GitHub Pages](https://pages.github.com/) | [Deploying React App on GitHub Pages from GitHub](https://create-react-app.dev/docs/deployment/#github-pages) | [Youtube](https://youtu.be/F8s4Ng-re0E) |

<br />

## Github Hosting steps

Install the gh-pages npm package as a development dependency

`npm install gh-pages --save-dev`

 Add a homepage property to the package.json file

`"homepage": "<https://{username}.github.io/{repo-name>}"`

Add these scripts in the package.json file

- "predeploy": "npm run build",
- "deploy": "gh-pages -d build",
- "start": "react-scripts start",
- "build": "react-scripts build",

At this point, the React app's package.json file includes deployment scripts.
Deploy the React app to GitHub Pages

   `npm run deploy`
