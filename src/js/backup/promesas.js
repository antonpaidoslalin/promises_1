const heroes = {
    capi:{
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre:'Ironman',
        poder:'Una absurda cantidad de dinero'
    },
    spider:{
        nombre:'Spiderman',
        poder:'La mejor reacción alérgica a las picaduras de araña'
    }
}
export const buscarHeroe=(id,) => {
    const  heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if (heroe){
            resolve(heroe);
        }else {
            reject(`Non existe un heroe co identificador ${id}`);
        }
    });

}