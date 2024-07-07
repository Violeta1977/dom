// import { header } from '../js/header.js';
// header();

import { renderSportTable } from '../js/sportas.js';
import { basketballData } from './sportData/basketball.js';
import { footballData } from './sportData/football.js';

const appDOM = document.getElementById('app');
appDOM.innerHTML = renderSportTable(basketballData);

// console.log(renderSportTable());
// patikrinti ar suveike eksportas
// appDOM vidinis HTML yra tai kas yra funkcijos
// renderSportTable() viduje

const appDOM2 = document.getElementById('app2');
appDOM2.innerHTML = renderSportTable(footballData);
