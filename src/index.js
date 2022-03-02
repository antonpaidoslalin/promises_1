import './styles.css';
import { buscarHeroe } from "./js/callbacks.js";
const heroeID='capi';
buscarHeroe(heroeID, () => {
    console.log('Chamamos callback');
})