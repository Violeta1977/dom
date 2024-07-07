import { header } from '../js/header.js';

header();

const h1DOM = document.getElementById('title');
console.log(h1DOM);
// kai pamatai tag pavadinima, reskai siame kintamajame yra nuoroda i realu html elementa
//  document yar visas html dokumentas
// .getElementBy yra vykdoma paieska

const pDOM = document.getElementsByTagName('p');
// gauname masyva
console.log(pDOM[0].innerText);
console.log(pDOM[0].textContent.trim());
// .trim isvalo white spaces

console.log(h1DOM.innerText.toUpperCase());
// console.log(pDOM.innerText);

const ulDOM = document.getElementsByTagName('ul');
console.log(ulDOM);
// console.log(ulDOM[0].innerText);
// suranda visame HTML dokumente visus ul

// // const liDOM = document.getElementsByTagName('li');
// // console.log(liDOM);
// // console.log(liDOM[0].innerText);
// // console.log(liDOM[1].innerText);
// // console.log(liDOM[2].innerText);
// // console.log(liDOM[3].innerText);

// // for (let i = 0; i < liDOM.length; i++) {
// //   console.log(liDOM[i].innerText);
// // }

// // for (let i = 0; i < document.getElementsByTagName('li').length; i++) {
// //   console.log(document.getElementsByTagName('li')[i].innerText);
// // }

// const liDOM = ulDOM[0].getElementsByTagName('li');

// // const liDOM = dokuments.getElementsByTagName('li');
// // spausdins visus sarasus, t.y visus <li>

// // const liDOM = ulDOM[1].getElementsByTagName('li');
// // spausdins antra sarasa ulDOM[1]

// for (let i = 0; i < liDOM.length; i++) {
//   console.log(liDOM[i].innerText);
// }

// // console.log('1) ' + liDOM[0].innerText);
// // console.log('2) ' + liDOM[1].innerText);
// // console.log('3) ' + liDOM[2].innerText);
// // console.log('4) ' + liDOM[3].innerText);
// // console.log('5) ' + liDOM[4].innerText);
// // console.log('6) ' + liDOM[5].innerText);

// console.log('____________________');

// // saraso sunumeravimas
// for (let i = 0; i < liDOM.length; i++) {
//   liDOM[i].innerText = i + 1 + ') ' + liDOM[i].innerText;
//   console.log(liDOM[i].innerText);
// }

// // kitas sarasas todel, kad ulDOM[1], t.y masyvo antras narys
// const liDOM2 = ulDOM[1].getElementsByTagName('li');
// // for (let i = 0; i < liDOM2.length; i++) {
// //   console.log(liDOM2[i].innerText);
// // }

// // antro saraso sunumeravimas
// for (let i = 0; i < liDOM2.length; i++) {
//   liDOM2[i].innerText = i + 1 + ') ' + liDOM2[i].innerText;
//   console.log(liDOM2[i].innerText);
// }

// const liDOM3 = ulDOM[2].getElementsByTagName('li');

// for (let i = 0; i < liDOM3.length; i++) {
//   liDOM3[i].innerText = i + 1 + ') ' + liDOM3[i].innerText;
//   console.log(liDOM3[i].innerText);
// }

//  kai konstanta iskelta uz ciklo skaiciuoja visus li is eiles
// ciklas, kuris sunumeruoja visus ul esancius li, kai konstanta yra ciklo viduje
let index = 1;

for (const list of ulDOM) {
  const liDOM = list.getElementsByTagName('li');

  // let index = 1;
  for (const item of liDOM) {
    // item.innerText = index++ + ') ' + item.innerText;
    item.innerText = `${index++}) ${item.innerText}`;
  }
}

document.getElementById('');
// elementas turi tureti atributa id
// visada paima elementa
document.getElementsByName('');
// turi tureti atributa name (formos elemento atributas, <input>,)
// ant tekstiniu elementu atributas name neegzistuoja
document.getElementsByClassName('');
// grazina masyva
// document. reiskia, kad iesko visame HTML dokumente

// const listItemsDOM = document.querySelector('h1');
// console.log(listItemsDOM);
// sis metodas pagal tag randa pati pirma taga

// const listItemsDOM1 = document.querySelectorAll('h1');
// console.log(listItemsDOM1[0].innerText);
// suranda masyva

// listItemsDOM1[0].innerText = '?????';
// console.log(listItemsDOM1[0].innerText);
// pkeicia teksta i ta kas nurodyta po lygybes

const listItemsDOM = document.querySelectorAll('ul > li:first-child, ol > li:first-child');
// ul:nth-child(6) > li
// ul > li:first-child, ol > li:first-child (randa visus pirmus li ul ir ol elementuose)
// paieska vykdoma pagal css selektorius

console.log(listItemsDOM);

const ulItemsDOM = document.querySelectorAll('ul > li:first-child');
console.log(ulItemsDOM);

const olItemsDOM = document.querySelectorAll('ol > li:first-child');
console.log(olItemsDOM);

// sarasas visu ul ir ol pirmu li
const x = [...ulItemsDOM];
const y = [...olItemsDOM];
const totalItemsDom = x.concat(y);
console.log(totalItemsDom);

const totalItemsDom1 = [...ulItemsDOM].concat(...olItemsDOM);
console.log(totalItemsDom1);

const allItemsDOM = [...ulItemsDOM, ...olItemsDOM];
// spread operatorius sujungia masyvus i viena
console.log(allItemsDOM);

const pomidoroVaikaiDOM = document.getElementById('darzas').querySelectorAll('.pomidoras > li');
console.log(pomidoroVaikaiDOM);
