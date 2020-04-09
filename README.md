# Example Queries 
## GET A LOGO
{
  logo(id:"5e8a98c44be3da58c8ddef94") {
    _id
    text
    color
    fontSize
    backgroundColor
    borderColor
    borderRadius
    borderThickness
    padding
    margin
  }
}

## GET ALL LOGOS
{
  logos {
      _id
      text
      color
      fontSize
      backgroundColor
      borderColor
      borderRadius
      borderThickness
      padding
      margin
  }
}

## ADD LOGO
### Logo #1
mutation {
  addLogo (
    text: "Facebook",
    color: "#80ff00",
    fontSize: 44,
    backgroundColor:"#ffff00",
    borderColor:"#ff8040",
    borderRadius:17,
    borderThickness:16,
    padding:15,
    margin:12,
  ) {
    lastUpdate
  }
}
### Logo #2
mutation {
  addLogo (
    text: "Amazon",
    color: "#ff0000",
    fontSize: 60,
    backgroundColor:"#ff8000",
    borderColor:"#008000",
    borderRadius:60,
    borderThickness:30,
    padding:10,
    margin:50,
  ) {
    lastUpdate
  }
}
### Logo #3
mutation {
  addLogo (
    text: "Google",
    color: "#00ffff",
    fontSize: 144,
    backgroundColor:"#008080",
    borderColor:"#f3ff33",
    borderRadius:0,
    borderThickness:10,
    padding:20,
    margin:40,
  ) {
    lastUpdate
  }
}
### Logo #4
mutation {
  addLogo (
    text: "Boeing",
    color: "#3364ff",
    fontSize: 120,
    backgroundColor:"#e033ff",
    borderColor:"#ff336e",
    borderRadius:130,
    borderThickness:50,
    padding:60,
    margin:100,
  ) {
    lastUpdate
  }
}
### Logo #5
mutation {
  addLogo (
    text: "Delta Airlines",
    color: "#46ff33",
    fontSize: 90,
    backgroundColor:"#33ffda",
    borderColor:"#af33ff",
    borderRadius:50,
    borderThickness:130,
    padding:0,
    margin:1,
  ) {
    lastUpdate
  }
}
## UPDATE LOGO
### Logo #1
mutation {
  updateLogo (
    id: "5e8a98c44be3da58c8ddef94",
    text: "iBIO",
    color: "#f3ff33",
    fontSize: 160,
    backgroundColor:"#33ff5b",
    borderColor:"#f633ff",
    borderRadius:144,
    borderThickness:144,
    padding: 144,
    margin:144
  ) {
    lastUpdate
  }
}
### Logo #2
mutation {
  updateLogo (
    id: "5e8a995d4be3da58c8ddef95",
    text: "Youtube",
    color: "#a833ff",
    fontSize: 60,
    backgroundColor:"#71ff33",
    borderColor:"#00ffff",
    borderRadius:62,
    borderThickness:52,
    padding: 12,
    margin:120
  ) {
    lastUpdate
  }
}

### Logo #3
mutation {
  updateLogo (
    id: "5e8a9a344be3da58c8ddef96",
    text: "IBM",
    color: "#ff0000",
    fontSize: 60,
    backgroundColor:"#ff8000",
    borderColor:"#00ff00",
    borderRadius:6,
    borderThickness:5,
    padding: 1,
    margin:100
  ) {
    lastUpdate
  }
}
### Logo #4
mutation {
  updateLogo (
    id: "5e8a9a7c4be3da58c8ddef97",
    text: "Donut Store",
    color: "#3349ff",
    fontSize: 20,
    backgroundColor:"#ff7d33",
    borderColor:"#ff3333",
    borderRadius:60,
    borderThickness:45,
    padding: 17,
    margin:0
  ) {
    lastUpdate
  }
}
### Logo #5
mutation {
  updateLogo (
    id: "5e8a9ade4be3da58c8ddef98",
    text: "Cruise Line",
    color: "#3364ff",
    fontSize: 120,
    backgroundColor:"#e033ff",
    borderColor:"#ff336e",
    borderRadius:130,
    borderThickness:90,
    padding: 34,
    margin:10
  ) {
    lastUpdate
  }
}

## REMOVE LOGO
### Logo #1
mutation {
  removeLogo (id: "5e8a98c44be3da58c8ddef94") {
    _id
  }
}
### Logo #2
mutation {
  removeLogo (id: "5e8a995d4be3da58c8ddef95") {
    _id
  }
}
### Logo #3
mutation {
  removeLogo (id: "5e8a9a344be3da58c8ddef96") {
    _id
  }
}
### Logo #4
mutation {
  removeLogo (id: "5e8a9a7c4be3da58c8ddef97") {
    _id
  }
}
### Logo #5
mutation {
  removeLogo (text: "5e8a9ade4be3da58c8ddef98") {
    _id
  }
}

<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



