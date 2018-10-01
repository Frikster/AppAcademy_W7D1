import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import Root from './components/root';

function Root() {
  return(
    <div>
      <h1>Todos App</h1>
    </div>
  );
}


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root/>, root);
});
