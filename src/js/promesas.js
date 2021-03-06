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
export const buscarHeroe=(id) => {
    const  heroe = heroes[id];
    console.time('T2');
    return new Promise((resolve, reject) => {
        if (heroe){
           console.info('antes setTimeout');
            setTimeout(() => {
                resolve(heroe)
            }, 2000);
            console.info('logo de timeout');
        } else {
            reject(`Non existe un heroe co identificador ${id}`);
        }
        console.timeEnd('T2');
    })
}


export const buscarHeroeAsync=async (id) => {
    const  heroe = heroes[id];
    if (heroe){
        return (heroe);
    } else {
        throw `No existe un héroe con el identificador ${id}`;
    }
    
}


// const promesaLenta = new Promise((resolve,reject)=> {
//     setTimeout(() => {
//         resolve('Promesa Lenta')
//     }, 2000);
// })
// const promesaMedia= new Promise((resolve,reject)=> {
//     setTimeout(() => {
//         resolve('Promesa Media')
//     }, 1500);
// })
// const promesaRapida = new Promise((resolve,reject)=> {
//     setTimeout(() => {
//         resolve('Promesa Rápida')
//     }, 1000);
// })

// export {
//     promesaLenta,
//     promesaMedia,
//     promesaRapida
// }