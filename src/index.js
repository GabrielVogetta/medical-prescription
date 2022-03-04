import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import MedicinesProvider from './contexts/Medicines';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <MedicinesProvider>
        <App />
    </MedicinesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);