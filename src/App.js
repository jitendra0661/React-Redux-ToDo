import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Add from './components/AddTask';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Add></Add>
        {/* <Delete></Delete> */}
      </div>
    </Provider>
    
  );
}

export default App;
