// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';
console.log(exampleVideoData);
var app = new App(exampleVideoData);
ReactDOM.render(<App/>, document.getElementById('app'));
