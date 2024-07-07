// const contentDOM = document.getElementById('content');
// console.log(contentDOM);

// <button type="button">Click me</button>

const formDOM = document.getElementsByTagName('form')[0];
// .getElements grazina masyva

// formDOM.innerHTML = ` <button type="button">Click me</button>`;
// uzraso vietoje buvusio turino, t.y pakeicia ji, jei buvo komentaras, jo neliks
formDOM.innerHTML += ` <button type="button">Click me</button>`;
// prideda po esanciu turiniu, t.y jmygtukas bus po komentaru
formDOM.innerHTML = formDOM.innerHTML + ` <button type="button">Click me</button>`;
// techniskai kuriamas tekstas, bet deka .innerHTML savybes tekstas
// suinterpretuojamas ir is jo sukuriamas HTML elementas
formDOM.innerHTML = ` <button type="button">Click me now</button>` + formDOM.innerHTML;
// iraso prie esama turini, t.y mygtukas atsiras pries komentara

// const formDOM1 = allFormsDOM[0];
// formDOM1.innerHTML += '<button type="button">Click me</button>';

// const formDOM2 = allFormsDOM[1];
// formDOM2.innerHTML += '<button type="button">Click me 2</button>';

const contentDOM = document.getElementById('content');
const ulDOM = contentDOM.querySelector('.products-list');
// paieska pagal klase

// ulDOM.innerHTML = `
//         <li>
//           <p class="title">Duona</p>
//           <p class="count">1</p>
//         </li>
//         <li>
//           <p class="title">Sviestas</p>
//           <p class="count">1</p>
//         </li>
//         <li>
//           <p class="title">Pomidoras</p>
//           <p class="count">3</p>
//         </li>
//         <li>
//           <p class="title">Agurkas</p>
//           <p class="count">1</p>
//         </li>
//         <li>
//           <p class="title">Grietine</p>
//           <p class="count">2</p>
//         </li>`;

const products = [
  {
    title: 'Duona',
    count: 1,
  },
  {
    title: 'Sviestas',
    count: 1,
  },
  {
    title: 'Pomidoras',
    count: 3,
  },
  {
    title: 'Agurkas',
    count: 1,
  },
  {
    title: 'Grietine',
    count: 2,
  },
  {
    title: 'Arbata',
    count: 1,
  },
];

let HTML = '';

for (let i = 0; i < products.length; i++) {
  HTML += `
        <li>
            <p class="title">${products[i].title}</p>
            <p class="count">${products[i].count}</p>
            <a href="#">Click me</a>
        </li>`;

  //   HTML += ` <li>`;
  //   HTML += `<p class="title">${products[i].title}</p>`;
  //   HTML += `<p class="title">${products[i].count}</p>`;
  //   HTML += ` <li/>`;
  //   HTML += ` <a href="#">Click me</a>`;
}

ulDOM.innerHTML = HTML;

const allParsDOM = document.querySelectorAll('main > p');
console.log(allParsDOM);

allParsDOM[1].innerText = allParsDOM[1].innerText.toUpperCase();
allParsDOM[4].innerText = allParsDOM[4].innerText.toUpperCase();

const redElementDOM = document.querySelectorAll('.red');
console.log(redElementDOM);

for (const redDOM of redElementDOM) {
  redDOM.style.backgroundColor = 'red';
  redDOM.style.fontSize = '2rem';
}
