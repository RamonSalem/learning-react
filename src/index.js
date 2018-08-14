import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import registerServiceWorker from './registerServiceWorker';
import Calculator from './components/Calculator';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
