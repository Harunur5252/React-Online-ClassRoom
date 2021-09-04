import React from 'react'
import AppRoute from './router/AppRoute'
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <AppRoute/>
    </HashRouter>
  );
}

export default App;
