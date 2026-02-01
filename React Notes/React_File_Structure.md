# File Structure

Comparing the create-react-app and vite-react-app

## Create React App

### About DOM
- DOM is know as Document Object Model
-  It is tree like structure which contain elements
- React creates it own DOM then compare it with main DOM and onlul update the area which is changed

### About index.js
In `index.js` we find one element by its Id
+ Taking its reference into a root variable like `const root = `
+ Where react create its own DOM to make comparisons
+ Then render the `App` component using root variable
+ Where we `App` is html element, this is rendering the html element through JavaScript in `index.js`
+ Where `App` itself a function which return html and rendering this `App` as the html where it is imported
+ It gives programming capabilities in html
+ The library `react-script` inject the script inside the page / index.html
It is mentioned in package.json


## Vite React App

It Doesn't provide the `react-script` inside the package.json then how script is injected in `index.html` ?

`index.html` is out of public folder

placing the file inside folder or outside is okay because it is library where this are on your choice rather than the framework

here `main.jsx` is directly linked inside the index.html

`.jsx` doesn't affect anything the app.
It can also be in create-react-app.

In Vite components name must be with `.jsx`

Similar import of libraries: React and ReactDOM

In `main.jsx` it directly render the App Component in root without taking root reference inside the variable


