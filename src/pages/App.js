import React from 'react';
import { Rute, store } from '../config';
import './App.css';
import { Provider } from 'react-redux';


function App() {
  return (
   <div>
    <Provider store={store} >
      <Rute />
    </Provider>
   </div>
  );
}

export default App;
