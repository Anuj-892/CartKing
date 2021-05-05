import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css'
import { BrowserRouter as Router } from 'react-router-dom'
import productContext from './context'
import data from './products'



ReactDOM.render(  
 <productContext.Provider value={data}>
       <Router>
          <React.StrictMode>
            <App />
         </React.StrictMode>
        </Router>
 </productContext.Provider>,
  document.getElementById('root')
);

