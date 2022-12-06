import './style.css';
import { Drink } from './components/Drink/index.js';


export const Menu = (props = {}) => {
  const { drinks } = props;

  const menuElm = document.createElement('section');
  menuElm.classList = 'menu';
  menuElm.setAttribute('id','menu');
  menuElm.innerHTML = 
  `
  <div class="container">
  <h2>Naše nabídka</h2>
  <p class="menu-intro">
    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
  </p>
  <div class="drinks-list">
  </div>
  <div class="order-detail">
    <a href="/objednavka">Detail objednávky</a>
  </div>
</div>
  `;
  const drinksListElm = menuElm.querySelector('.drinks-list');

  if (drinks === undefined) {
  fetch('https://apps.kodim.cz/daweb/cafelora/api/me/drinks', {
    method: 'GET',
    headers: {
      'Authorization': 'Email veronikabosakova@gmail.com'
    }
  })
  .then((response) => response.json())
  .then((data) => drinksListElm.replaceWith(Menu({drinks: data.results}))
  )} else {
    const populateDrinks = menuElm.querySelector('.drinks-list');
    populateDrinks.append(...drinks.map((drink) => Drink(drink)));
  }

  return menuElm;
}



