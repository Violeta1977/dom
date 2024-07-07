// kai export default function()
// galima perpavadinti
import { header } from './js/header.js';
import { mainLinksData } from './js/linkData.js';

header(mainLinksData);
console.log(header(mainLinksData));

// jegu naudoji situos funkcialumus
// tada reikia HTML faile, kuris dirba su funkcialumo failu
// turi nurodyti papildoma atributa type="module"
