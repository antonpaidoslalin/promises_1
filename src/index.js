import './styles.css';
import { buscarHeroeAsync, buscarHeroe } from './js/promesas';
import { obtenerHeroesArr, obtenerHeroesArrAwait, obtenerHeroeAsync } from './js/await';

// buscarHeroe ('capi2')
//     .then  (heroe => log(heroe))
//     .catch (err => console.warn(err))
//     .finally (()=> console.info('Busca finalizada'));

// buscarHeroeAsync ('iron2')
//     .then  (heroe => log(heroe))
//     .catch (err => console.warn(err))
//     .finally (()=>console.info('Busca finalizada'));
console.time('T1');
obtenerHeroeAsync('capi2');
console.timeEnd('T1');
