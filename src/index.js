import './styles.css';
import { promesaLenta, promesaMedia,promesaRapida } from './js/promesas'

Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(mensaje => console.log(mensaje))
    .catch(err => console.warn(err));

