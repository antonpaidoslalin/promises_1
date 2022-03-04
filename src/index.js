import './styles.css';
import { buscarHeroeAsync, buscarHeroe } from './js/promesas';

buscarHeroe ('capi2')
    .then  (heroe => log(heroe))
    .catch (err => console.warn(err));

buscarHeroeAsync ('iron2')
    .then  (heroe => log(heroe))
    .catch (err => console.warn(err));