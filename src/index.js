import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Cartas from "./Cartas"
import "tachyons";
import {storyPoints} from "./Baraja"
// import {tshirt} from "./Baraja"
// import {fibonacci} from "./Baraja"
import TitleBar from "./TitleBar"
import Footer from "./Footer"
import Attribution from "./Attribution"

ReactDOM.render(
  <React.StrictMode>

  <TitleBar />

  <div className="flex flex-wrap">
    <Cartas value={storyPoints[0]}/>
    <Cartas value={storyPoints[1]}/>
    <Cartas value={storyPoints[2]}/>
    <Cartas value={storyPoints[3]}/>
    <Cartas value={storyPoints[4]}/>
    <Cartas value={storyPoints[5]}/>
    <Cartas value={storyPoints[6]}/>
    <Cartas value={storyPoints[7]}/>
    <Cartas value={storyPoints[8]}/>
    <Cartas value={storyPoints[9]}/>
    <Cartas value={storyPoints[10]}/>

    <Cartas value={storyPoints[11]}/>

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
