import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "tachyons";
import TitleBar from "./TitleBar"
import Footer from "./Footer"
import Attribution from "./Attribution"
import CardList from "./CardList"

ReactDOM.render(
  <React.StrictMode>

  <TitleBar />
  <div className="flex flex-wrap">
    <CardList/>
  </div>
  <div className="mb4 tc">
  <Attribution />
  </div>

  <Footer />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
