import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = [ 'capi', 'iron', 'spider'];
export const obtenerHeroesArr = async () =>{
        const heroesArr = [];
        for  (const id of heroesIds) {
           const heroe = await buscarHeroe(id);
           heroesArr.push(heroe);
        }
        return (heroesArr);
        //return await Promise.all(heroesArr)
       // return await Promise.all (heroesIds.map(buscarHeroe));
}
export const obtenerHeroeAsync= async (id) => {
        const heroe=await buscarHeroe(id);

        return heroe;
}