let productosrecuperados=JSON.parse(localStorage.getItem('productos'))
const teclados = []
const mouses = []
if (productosrecuperados!=null){
    for( const teclado of productosrecuperados[0]){
        teclados.push(teclado)
    }
    for( const mouse of productosrecuperados[1]){
        mouses.push(mouse)
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
    constructor(marca,nombre,wireless,botones_lat,cantidad){
        this.id= ++Mouse.id,
        this.marca=marca,
        this.nombre=nombre,
        this.wireless=wireless,
        this.botones_lat=botones_lat,
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
    if(valor=='2'){
        let carga_mouse = document.createElement('form')
        carga_mouse.innerHTML=`<form id="form"><br> <p>Marca/Nombre/Wireless/Botones laterales/Cantidad</p> <input type="text" id="marca"> <input type="text" id="nombre"> <select id=wireless> <option value="true">si</option> <option value="false">no</option> </select> <select id=botones_lat> <option value="true">si</option> <option value="false">no</option> </select> <input type="number" id="cantidad"> <button type="button" id="cargar">Cargar</button> </form>`
        section.appendChild(carga_mouse)
        cargar.onclick = () =>{
            let marca = document.getElementById("marca")
            let nombre = document.getElementById("nombre")
            let wireless = document.getElementById("wireless")
            let botones_lat= document.getElementById("botones_lat")
            let cantidad = document.getElementById("cantidad")
            const mouse = new Mouse(marca.value,nombre.value,wireless.value,botones_lat.value,cantidad.value)
            mouses.push(mouse)
        }
    }
}



const productos = [teclados,mouses]

function mostrar_teclados (lista){
    let imp= document.createElement("teclados")
    return imp.innerHTML =`<h3>Teclados</h3><ul> ${lista.map(teclado => `<li>Marca: ${teclado.marca}, Nombre: ${teclado.nombre}, Tamaño: ${teclado.tamano}, Cantidad: ${teclado.cantidad}</li>`)} </ul>`
    
}
function mostrar_mouses (lista){
    let imp= document.createElement("mouses")
    return imp.innerHTML =`<h3>Mouse</h3><ul> ${lista.map(mouse => `<li>Marca: ${mouse.marca}, Nombre: ${mouse.nombre}, Wireless: ${mouse.wireless},Botones Laterales: ${mouse.botones_lat} Cantidad: ${mouse.cantidad}</li>`)} </ul>`
}

function mostrar_todos(){
    let imp= document.createElement("productos")
    imp.innerHTML=`${mostrar_teclados(teclados)} ${mostrar_mouses(mouses)}`
    section.appendChild(imp)
}
const en_stock = (lista)=>{
    const nueva_lista= lista.filter(producto=> producto.cantidad>0)
    return nueva_lista
}

const filtro_de_busqueda= (valor)=> {
    let mostrar = document.createElement("section")
    section.appendChild(mostrar)
    if(valor ==='1'){
        mostrar.innerHTML=' '
        let menu=document.createElement("form")
        menu.innerHTML=`<p>Ingrese la Marca</p> <input type="text" id="marca"> <select id="stock"> <option value="1">Mostrar Todos</option> <option value="2">Solo en stock</option> </select> <button type="button" id="filtro">Buscar</button> `
        mostrar.appendChild(menu)
        let marca = document.getElementById('marca')
        let stock = document.getElementById('stock')
        let filtro = document.getElementById('filtro')
        filtro.onclick = () => {
            let imp_section = document.createElement("section")
            mostrar.appendChild(imp_section)
            console.log("1")
            let stock_valor = stock.value
            let marca_valor = marca.value
            const teclados_dmarca= teclados.filter(teclado=> teclado.marca===marca_valor)
            const mouses_dmarca= mouses.filter(mouse=> mouse.marca===marca_valor)
            if(stock_valor=='1'){
                console.log('2')
                let imp= document.createElement("productos")
                imp.innerHTML =`<h2>Lista de productos de ${marca_valor}</h2>${mostrar_teclados(teclados_dmarca)} ${mostrar_mouses(mouses_dmarca)} `
                mostrar.appendChild(imp)
            }
            else{
                const t_en_stock = en_stock(teclados_dmarca)
                const m_en_stock = en_stock(mouses_dmarca)
                let imp= document.createElement("productos")
                imp.innerHTML =`<h2>Lista de productos de ${marca_valor}</h2>${mostrar_teclados(t_en_stock)} ${mostrar_mouses(m_en_stock)} `
                mostrar.appendChild(imp)
            }
        }
    }
    else{
        mostrar.innerHTML=''
        let menu=document.createElement("form")
        menu.innerHTML=`<h3>Seleccione los producos que desea ver</h3> <select id="producto"> <option value="0">Teclados </option> <option value="1">Mouses </option> </select> <select id="stock"> <option value="1">Mostrar Todos</option> <option value="2">Solo en stock</option> </select> <button type="button" id="filtro">Buscar</button> `
        mostrar.appendChild(menu)
        let producto=document.getElementById("producto")
        let stock=document.getElementById("stock")
        let filtro=document.getElementById("filtro")
        filtro.onclick=()=>{
            let producto_valor= producto.value
            let stock_valor= stock.value
            if(stock_valor=="1"){
                switch (producto_valor){
                    case "0":
                        let imp_t= document.createElement("imp")
                        imp_t.innerHTML= `${mostrar_teclados(teclados)}`
                        mostrar.appendChild(imp_t)
                        break;
                    case "1":
                        let imp_m= document.createElement("imp")
                        imp_m.innerHTML= `${mostrar_mouses(mouses)}`
                        mostrar.appendChild(imp_m)
                        break;
                    default:
                        break;
                }

            }
            else{
                switch (producto_valor){
                    case "0":
                        let imp_t= document.createElement("imp")
                        let t_en_stock=en_stock(teclados)
                        imp_t.innerHTML= `${mostrar_teclados(t_en_stock)}`
                        mostrar.appendChild(imp_t)
                        break;
                    case "1":
                        let imp_m= document.createElement("imp")
                        let m_en_stock=en_stock(mouses)
                        imp_m.innerHTML= `${mostrar_mouses(m_en_stock)}`
                        mostrar.appendChild(imp_m)
                        
                        break;
                    default:
                        break;
                }
            }
        }

    }
}

const editar_inventario= ()=>{
    let mensaje=document.createElement("p")
    mensaje.innerHTML=`Todavia la tengo que hacer`
    section.appendChild(mensaje)
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
            let busqueda = document.createElement("form")
            busqueda.innerHTML= `<form id="form"> <select id="valor"> <option value="1">Buscar por Marca</option> <option value="2">Buscar por Producto</option> </select> <button type="button" id="ir">Buscar</button> </form>`
            section.appendChild(busqueda)
            let ir= document.getElementById("ir")
            let valor=document.getElementById("valor")
            ir.onclick= ()=>{
                valor= valor.value
                filtro_de_busqueda(valor)
            }
            break;
        case '4':
            section.innerHTML=" "
            editar_inventario()
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


 