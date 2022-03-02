import './styles.css';
 import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks.js";
 import { buscarHeroe } from './js/promesas';
const heroeID='capi';
// buscarHeroe(heroeID, (err, heroe) => {
//     // console.log('Chamamos callback');
//     if (err) {
//         console.error(err);
//     } else {
//         console.info(heroe);
//     }
// })