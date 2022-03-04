import './styles.css';
import { buscarHeroeAsync, buscarHeroe } from './js/promesas';
import { obtenerHeroesArr } from './js/await';

// buscarHeroe ('capi2')
//     .then  (heroe => log(heroe))
//     .catch (err => console.warn(err))
//     .finally (()=> console.info('Busca finalizada'));

// buscarHeroeAsync ('iron2')
//     .then  (heroe => log(heroe))
//     .catch (err => console.warn(err))
//     .finally (()=>console.info('Busca finalizada'));
obtenerHeroesArr().then((heroesArr) => console.table(heroesArr),);
