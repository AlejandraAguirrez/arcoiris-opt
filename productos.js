//PAGINA PRODUCTOS CARD: VARIEDAD DE JUEGOS

let variedadJuegos = []
const juegosCard= document.getElementById('variedadJuegos')

class juegosVariedad{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
} 
}

let metegol = new juegosVariedad('metegol', 3700)
let sapo = new juegosVariedad('sapo', 4500)
let arcade = new juegosVariedad('arcade', 8500)

variedadJuegos.push(metegol, sapo, arcade)

variedadJuegos.forEach(juegosVariedad=>{
    const option = document.createElement('option')
    const {nombre, precio} = juegosVariedad  //DESTRUCTURACION
    option.innerText = `${nombre}: $${precio}`
    juegosCard.append(option)
})

//PAGINA PRODUCTOS CARD: PLAZA BLANDA

let plazaBlanda = []
const plazaCard= document.getElementById('plazaBlanda')

class plaza{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
} 
}

let tobogan = new plaza('tobogan', 3500)
let saltarin = new plaza('saltarin', 2600)
let circuito = new plaza('circuito', 7500)

plazaBlanda.push(tobogan, saltarin, circuito)

plazaBlanda.forEach(plaza=>{
    const option = document.createElement('option')
    const {nombre, precio} = plaza   //DESTRUCTURACION
    option.innerText = `${nombre}: $${precio}`
    plazaCard.append(option)
})

//PAGINA PRODUCTOS CARD: INFLABLES

let inflables = []
const inflablesCard= document.getElementById('inflables')

class inflable{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
} 
}

let castillo = new inflable('castillo', 8000)
let ring = new inflable('ring',12000)
let barco = new inflable('barco', 13500)

inflables.push(castillo, ring, barco)

inflables.forEach(inflable=>{
    const option = document.createElement('option')
    const {nombre, precio} = inflable  //DESTRUCTURACION 
    option.innerText = `${nombre}: $${precio}`
    inflablesCard.append(option)
})




