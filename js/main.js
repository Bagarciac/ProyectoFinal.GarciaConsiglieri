let productosrecuperados=JSON.parse(localStorage.getItem('productos'))
const teclados = []
const mouses = []
if (productosrecuperados!=null){
    for( const teclado of productosrecuperados[0]){
        teclados.push(teclado)
    }
}



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
        let cargar = document.getElementById("cargar")
        cargar.onclick = () =>{
            let marca = document.getElementById("marca")
            let nombre = document.getElementById("nombre")
            let tamano = document.getElementById("tamano")
            let cantidad = document.getElementById("cantidad")
            const teclado = new Teclado(marca.value,nombre.value,tamano.value,cantidad.value)
            teclados.push(teclado)
        }
    }
}



const productos = [teclados,mouses]

function mostrar_teclados (){
    let imp= document.createElement("teclados")
    imp.innerHTML =`<h2>Lista de teclados</h2><ul> ${teclados.map(teclado => `<li>Marca: ${teclado.marca}, Nombre: ${teclado.nombre}, Tamaño: ${teclado.tamano}, Cantidad: ${teclado.cantidad}</li>`)} </ul>`
    section.appendChild(imp)
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
let g_y_s = document.getElementById("guardarysalir")
g_y_s.onclick= ()=>{
    localStorage.setItem('productos',JSON.stringify(productos))
    window.close()
}
buscar.onclick = () => {
    console.log(opcion.value)
    switch(opcion.value){
        case '1':
            section.innerHTML= " "
            mostrar_todos()
            break;
        case '2':
            section.innerHTML= " "
            let selector = document.createElement("form")
            selector.innerHTML= '<form id="form"> <select id="producto"> <option value="1">Agregar teclado</option> <option value="2">Agregar mouse</option></select> <button type="button" id="agregar">agregar</button> </form>'
            section.appendChild(selector)
            let agregar= document.getElementById("agregar")
            let producto = document.getElementById("producto")
            agregar.onclick = ()=> {
                let valor= producto.value
                agregar_a_inv(valor)
            }
            break;
        case '3':
            section.innerHTML= " "
            filtro_de_busqueda(marca)
            break;
        case '5':
            localStorage.clear()
            break;
        case 0:
            break;
        default:
            break;
    }
}


 