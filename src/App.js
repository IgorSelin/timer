import './App.css';
import React from 'react';
import LoginPage from "./components/LoginPage/LoginPage";
import {Provider} from "react-redux";
import {store} from "./redux/reactStore";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div><BrowserRouter>
        <Provider store={store}>
     <LoginPage/>
        </Provider>
    </BrowserRouter>
    </div>
  );
}

export  {App};
