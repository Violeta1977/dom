const initialElementDOM = document.getElementById('pokemon');

initialElementDOM.innerHTML = `
    <article>
      <img src="#" alt="" />
      <p><span>Name: </span>NAME</p>
      <p>COLOR</p>
      <p>CATEGORY</p>
      <p>TYPE</p>
      <a href="#">Read more</a>
    </article>`;

const articleDOM = document.querySelector('article');

const mainData = [
  {
    src: 'https://archives.bulbagarden.net/media/upload/b/b2/0029Nidoran.png',
    name: 'Nidoran',
    color: 'Violet',
    category: 'Poison Pin',
    abilities: 'Poison',
    link: 'https://www.pokemon.com/uk/pokedex/nidoran-female',
  },
  {
    src: 'https://archives.bulbagarden.net/media/upload/8/81/0002Ivysaur.png',
    name: 'Ivysaur',
    color: 'Green',
    category: 'Seed',
    abilities: 'Overgrow',
    link: 'https://www.pokemon.com/uk/pokedex/ivysaur',
  },
  {
    src: './img/006.png',
    name: 'Charizard',
    color: 'Orange',
    category: 'Flame',
    abilities: 'Blaze',
    link: 'https://www.pokemon.com/uk/pokedex/charizard',
  },

  {
    src: './img/017.png',
    name: 'Pidgeotto',
    color: 'Normal',
    category: 'Bird',
    abilities: 'Keen Eye',
    link: 'https://www.pokemon.com/uk/pokedex/pidgeotto',
  },

  {
    src: './img/024.png',
    name: 'Arbok',
    color: 'Violet',
    category: 'Cobra',
    abilities: 'Shed Skin',
    link: 'https://www.pokemon.com/uk/pokedex/arbok',
  },
  {
    src: './img/030.png',
    name: 'Nidorina',
    color: 'Violet',
    category: 'Poison Pin',
    abilities: 'Poison Point',
    link: 'https://www.pokemon.com/uk/pokedex/nidorina',
  },
  {
    src: './img/035.png',
    name: 'Clefairy',
    color: 'Pink',
    category: 'Fairy',
    abilities: 'Cute Charm',
    link: 'https://www.pokemon.com/uk/pokedex/clefairy',
  },
  {
    src: './img/038.png',
    name: 'Ninetales',
    color: 'Orange',
    category: 'Fox',
    abilities: 'Flash Fire',
    link: 'https://www.pokemon.com/uk/pokedex/ninetales',
  },
  {
    src: './img/037.png',
    name: 'Vulpix',
    color: 'Orange',
    category: 'Fox',
    abilities: 'Flash Fire',
    link: 'https://www.pokemon.com/uk/pokedex/vulpix',
  },
  {
    src: './img/054.png',
    name: 'Psyduck',
    color: 'Blue',
    category: 'Duck',
    abilities: 'Damp',
    link: 'https://www.pokemon.com/uk/pokedex/psyduck',
  },
];

let articleHTML = '';

for (const data of mainData) {
  articleHTML += `<article class="arciclePoc" style = "background-color: ${data.color}" >
      <img src="${data.src}" alt="${data.name}" />
      <p><span>Name: </span>${data.name}</p>
      <p><span>Color: </span>${data.color}</p>
      <p><span>Category: </span>${data.category}</p>
      <p><span>Abilities: </span>${data.abilities}</p>
      <a href="${data.link}" target="_blank">Read more</a>
    </article>`;
}

articleDOM.innerHTML = articleHTML;
