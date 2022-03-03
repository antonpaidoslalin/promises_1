import './styles.css';
 import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks.js";
 import { buscarHeroe } from './js/promesas';
const heroeId1='capi';
const heroeId2='iron';
const heroeId3='spider';
// buscarHeroe(heroeID, (err, heroe) => {
//     // console.log('Chamamos callback');
//     if (err) {
//         console.error(err);
//     } else {
//         console.info(heroe);
//     }
// })
// ==============PROMESA V.0====================
// buscarHeroe (heroeId1).then((heroe) => {
//     console.log(`Enviando ${heroe.nombre} á misión`);
// });
// console.log('Fin do programa');

//===============PROMESA V.1=====================

Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2), buscarHeroe(heroeId3)])
.then(heroes => {
    for (let i=0; i < heroes.length; i++){
    console.log(heroes[i].nombre);
    }
}).catch(err => {
    console.error(err);
})

