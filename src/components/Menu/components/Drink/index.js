import './style.css';
import { Layer } from '../Layer/index.js';


export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList = 'drink';
  drinkElm.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="${props.image}">
      </div>
      <div class="drink__info">
        <h3>${props.name}</h3>
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn">
        Objednat
      </button>
    </div>
  `;
  drinkElm.querySelector('.drink__info').append(Layer(
    {
      color: '#feeeca',
      label: 'mléčná pěna',
    }
  ));
  return drinkElm;
}