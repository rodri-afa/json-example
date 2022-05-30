// const esteam = require('./steam.json');

const esteamJSON =
{
    "titulo": "ESTEAM",
    "descripcion": "Nuestra réplica de steam",
    "categorias": ["FPS", "MOBA","MMO", "MMORPG","Hack & Slash"],
    "contacto":{
        "email": "hola@esteam.es",
        "direccion": "calle de los videojuegos 14"
    },
    "videojuegos":[
        {
            "titulo":"Valorant",
            "año":"2020", 
            "categorias":["FPS","Multijugador"]
        },
        {
            "titulo":"Heartstone",
            "año":"2015", 
            "categorias":["TCG","Multijugador","cards"]
        },
        {
            "titulo":"The Last of US",
            "año":"2013", 
            "categorias":["aventura","terror","zombies","accion"]
        } 
    ]

};


// console.log(esteamJSON.descripcion);



function rellenarDatos(idElemento,valor){
    document.getElementById(idElemento).innerHTML = valor;
}
function rellenarImagen(idElemento,valor){
    document.getElementById(idElemento).src= valor;
}


// document.getElementById('titulo').innerHTML = 'hjkfasdhkjfhajsdkhjk';


rellenarDatos('titulo',esteamJSON.titulo);
rellenarDatos('descripcion',esteamJSON.descripcion);

const url = 'https://rickandmortyapi.com/api/';
const endpoint = 'character/1'
fetch(url + endpoint)
  .then((response) => response.json())
  .then((data) => {
    
    console.log('el objeto data tiene:',data);


    rellenarDatos('nombre', data.name);
    rellenarDatos('origen', data.origin.name);
    rellenarImagen('imagen', data.image);



  })