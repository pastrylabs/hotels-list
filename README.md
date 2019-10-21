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

## Thought process for Rating Component

I figured one can create star rating component in 5 ways.

1. Using an Image file
2. Using a background Image
3. Using SVG to draw the shape
4. Using CSS to draw the shape
5. Using Unicode symbols

When these methods are compared against each other the resulting comparison lokks like this:

![Comparison](https://user-images.githubusercontent.com/501335/67189003-2ace7f00-f439-11e9-9ef5-818000a62a23.png)

While using SVG(3) and Unicode Characters in pseudo-elements(5) are both great, I choose to develop using Unicode Symbols as I've never done that before and wanted to give that a try :). Also, with SVG there will be a slight maintainence overload of inlining them and referencing them and with Unicode the positioning could be tricky because of the use of pseudo elements. So If I am doing this for production purposes I would probably do it using SVG.

How would I implement it SVG?

```
<!-- Draw the star as a symbol and remove it from view -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="star" viewBox="214.7 0 182.6 792">
    <!-- <path>s and whatever other shapes in here -->
  </symbol>
</svg>
```

```
<!-- Then use anywhere and as many times as we want! -->
<svg class="icon">
  <use xlink:href="#star" />
</svg>
```

Also, instead of hiding the reference element with css, In an ideal world, the first appearance would be the reference, and all consecutive appearances would use the original by reference.
