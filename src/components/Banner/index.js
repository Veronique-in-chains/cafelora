import './style.css';

export const Banner = () => {
  const bannerElm = document.createElement('section');
  bannerElm.classList = 'banner';
  bannerElm.setAttribute('id','home');
  bannerElm.innerHTML = 
   `
   <div class="container">
   <div class="banner__content">
     <h1>Přijď to ochutnat!</h1>
     <p>Nabízíme kvalitní kávu, útulné prostředí a perfektní servis.</p>
   </div>
 </div>
  `;
  return bannerElm;
}


