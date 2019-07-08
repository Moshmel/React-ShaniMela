import React from "react";
import Router from "./Router";
import "./assets/css/App.scss";
import {Provider} from "mobx-react"
import store from './Store/AppStore'

function App() {
  return (
   <Provider store={store}>
    <div className="App">
      <Router/>
      
    </div>
    </Provider>
  );
}

export default App;
