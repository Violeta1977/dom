// const headerDOM = document.getElementsByTagName('header')[0];

// headerDOM.innerHTML = `<header>
//       <nav>
//         <a href="../">Home</a>
//         <a href="../about-us/">About us</a>
//         <a href="../products/">Products</a>
//         <a href="../e-mail/">E-mail</a>
//       </nav>
//     </header>`;

const headerDOM = document.getElementsByTagName('header')[0];

headerDOM.innerHTML = `
        <nav>
        HEADER
        </nav>
    `;

const navDOM = document.getElementsByTagName('nav')[0];

export function header(mainLinksData) {
  let navHTML = '';

  for (const linkData of mainLinksData) {
    navHTML += `<a class = 'link' href="${linkData.a}">${linkData.text}</a>`;
  }

  return (navDOM.innerHTML = navHTML);
}

// export default header;
// gali ekportuoti ne tik funkcija, bet ir konstanta
// pvz. const header = "HEADER"
// tokiu ekportavimu galima vadinti vienodai ir funkcijas, ir konstantas

// VARDINIAI EKSPORTAVIMAI
// export { header };
// eksport function header(){}
// export { header };
// importo metu funkcijos pavadinimas idedamas i {}
// importo metu reikia tiksliai nurodyti kas buvo eksportuojama
// t.y. tikslus funkcijos pavadinimas

// negalima eksportuoti funkciju ir konstantu tokiu paciu pav
// t.y. vienu pavadinimu negali buti skirtingu dalyku
// jegu reikia, kad konstanta butu tokiu paciu pav kaip ir funkcija
// importavimo metu galima import { header as pomidoras } from...
// tada funkcijos iskvietimas pomidoras()
