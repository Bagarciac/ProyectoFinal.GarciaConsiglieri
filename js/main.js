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


console.log("Menu\n1-Para ver todos los productos\n2-para elegir que productos ver\n3-Para buscar por marca\n0-Para salir")
let opcion = parseInt(prompt("Eliga una opcion"))
while(opcion!=0){
    switch(opcion){
        case 1:
            mostrar_todos()
            break;
        case 2:
            console.log("1-Para ver los teclados\n2-Para ver los mouse\n0-para salir")
            let n = parseInt(prompt("Seleccione una opcion"))
            while(n!=0){
                if(n==1){
                    mostrar_teclados()
                }
                else if(n==2){
                    mostrar_mouses()
                }
                console.log("1-Para ver los teclados\n2-Para ver los mouse\n0-para salir")
                n= parseInt(prompt("Seleccione una opcion")) 
            }
            break;
        case 3:
            let marca = prompt("Que marca quiere buscar: ")
            filtro_de_busqueda(marca)
            break;
        case 0:
            break;
        default:
            break;
    }
    console.log("Menu\n1-Para ver todos los productos\n2-para elegir que productos ver\n3-Para buscar por marca\n0-Para salir")
    opcion = parseInt(prompt("Eliga una opcion"))
}
