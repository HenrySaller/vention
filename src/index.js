import { h, render } from 'preact';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

render(<App />, document.getElementById('root'));
registerServiceWorker();

// Enables `react-devtools` in Preact projects.
require('preact/debug');
