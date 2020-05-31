import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  document.getElementById('simple-render').innerHTML = `
<div>
<p>----------------------------------------</p>
  <p>Normal HTML</p>
<p>----------------------------------------</p>
<input/>
<pre>${new Date().toLocaleTimeString()}</pre>
</div>
`;
}

// render();
setInterval(render, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
