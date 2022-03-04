import './styles.css';
import { promesaLenta, promesaMedia,promesaRapida } from './js/promesas'

Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(mensaje => console.log(mensaje))
    .catch(err => console.warn(err));


    // Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2), buscarHeroe(heroeId3)])
    // .then(heroes => {
    //     for (let i=0; i < heroes.length; i++){
    //     console.log(heroes[i].nombre);
    //     }
    // }).catch(err => {
    //     console.error(err);
    // })
    