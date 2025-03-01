const teclados= [
    {
        marca: "hyperx",
        nombre: "alloy core",
        tamano: 75,
        cantidad: 10 
    },
    {
        marca: "logitech",
        nombre: "g650",
        tamano: 100,
        cantidad: 5
    },
    {
        marca: "steelseries",
        nombre: "apexpro tkl",
        tamano: 75,
        cantidad: 20
    },

]

const mouses= [
    {
        marca: "logitech",
        nombre: "gpro wireless",
        wireless: true,
        botones_lat: true,
        botones_cant: 5,
        cantidad: 10  
    },
    {
        marca: "logitech",
        nombre: "m17",
        wireless: true,
        botones_lat: false,
        botones_cant: 3,
        cantidad: 3
    },
    {
        marca: "logitech",
        nombre: "mx master 3s",
        wireless: true,
        botones_lat: true,
        botones_cant: 7,
        cantidad: 15
    },

]

class Teclado{
    static id= 0
    constructor(marca,nombre,tamano,cantidad){
        this.id= ++Teclado.id
        this.marca=marca,
        this.nombre=nombre,
        this.tamano=tamano,
        this.cantidad=cantidad
    }
}
class Mouse{
    static id = 0
    constructor(marca,nombre,wireless,botones_lat,botones_cant,cantidad){
        this.id= ++Mouse.id,
        this.marca=marca,
        this.nombre=nombre,
        this.wireless=wireless,
        this.botones_lat=botones_lat,
        this.botones_cant=botones_cant,
        this.cantidad=cantidad
    }
}

const agregar_a_inv = (valor) =>{
    console.log(valor)
    if(valor == '1'){
        let carga_teclado = document.createElement("form")
        carga_teclado.innerHTML='<form id="form"><br> <p>Marca/Nombre/Tamaño/cantidad</p> <input type="text" id="marca"> <input type="text" id="nombre"> <input type="number" id="tamano"> <input type="number" id="cantidad"> <button type="button" id="cargar">Cargar</button> </form>'
        section.appendChild(carga_teclado)
        let buscar = document.getElementById("carga")
    }
}

const productos = [teclados,mouses]

function mostrar_teclados (){
    console.log("Teclados: ")
    for( const teclado of teclados){
        console.log("Marca:"+teclado.marca+" Nombre: "+teclado.nombre+" Tamaño:"+teclado.tamano+"% Cantidad: "+teclado.cantidad)
    }
}
function mostrar_mouses (){
    console.log("Mouse:")
    for( const mouse of mouses){
        if(mouse.botones_lat){
            console.log("Marca: "+mouse.marca+" Nombre: "+mouse.nombre+" Es inalambrico: "+mouse.wireless+" Cantidad de botones: "+mouse.botones_cant+" Stock: "+mouse.cantidad)
        }
        else{
            console.log("Marca: "+mouse.marca+" Nombre: "+mouse.nombre+" Es inalambrico: "+mouse.wireless+" Stock: "+mouse.cantidad)
        }
    }
}

function mostrar_todos(){
    mostrar_teclados()
    mostrar_mouses()
}
function filtro_de_busqueda(marca){
    console.log("Teclados: ")
    let cantT=0
    let cantM=0
    for(const teclado of teclados){
        if(marca==teclado.marca){
            console.log("Marca:"+teclado.marca+" Nombre: "+teclado.nombre+" Tamaño:"+teclado.tamano+"% Cantidad: "+teclado.cantidad)
            cantT++
        }
    }
    console.log("Mouse:")
    for(const mouse of mouses){
        if(marca==mouse.marca){
            if(mouse.botones_lat){
                console.log("Marca: "+mouse.marca+" Nombre: "+mouse.nombre+" Es inalambrico: "+mouse.wireless+" Cantidad de botones: "+mouse.botones_cant+" Stock: "+mouse.cantidad)
                cantM++
            }
            else{
                console.log("Marca: "+mouse.marca+" Nombre: "+mouse.nombre+" Es inalambrico: "+mouse.wireless+" Stock: "+mouse.cantidad)
                cantM++
            }
        }
    }
    if (cantT==0){
        alert("No hay ningun teclado de esa marca")
    }
    if( cantM==0){
        alert("No hay ningun mouse de esta marca")
    }
}




let opcion = document.getElementById("opcion")
let buscar = document.getElementById("buscar")
let section = document.getElementById("section")
buscar.onclick = () => {
    console.log(opcion.value)
    switch(opcion.value){
        case '1':
            mostrar_todos()
            break;
        case '2':
            let selector = document.createElement("form")
            selector.innerHTML= '<form id="form"> <select id="producto"> <option value="1">Agregar teclado</option> <option value="2">Agregar mouse</option></select> <button type="button" id="agregar">agregar</button> </form>'
            section.appendChild(selector)
            let agregar= document.getElementById("agregar")
            let producto = document.getElementById("producto")
            let valor
            agregar.onclick = ()=> {
                valor = producto.value
                agregar_a_inv(valor)
            }
            break;
        case '3':
            filtro_de_busqueda(marca)
            break;
        case 0:
            break;
        default:
            break;
    }
}


 