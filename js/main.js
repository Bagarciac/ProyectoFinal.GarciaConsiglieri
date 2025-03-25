let productosrecuperados=JSON.parse(localStorage.getItem('productos'))
    if (!productosrecuperados){
        productosrecuperados=[]
    }
const productos= productosrecuperados


class Teclado{
    static id= 0
    constructor(marca,nombre,tamano,cantidad){
        this.id= (++Teclado.id)+'t',
        this.marca=marca,
        this.nombre=nombre,
        this.tamano=tamano,
        this.tipo="teclado",
        this.cantidad=cantidad
    }
}
class Mouse{
    static id = 0
    constructor(marca,nombre,wireless,botones_lat,cantidad){
        this.id= (++Mouse.id)+'m',
        this.marca=marca,
        this.nombre=nombre,
        this.wireless=wireless,
        this.botones_lat=botones_lat,
        this.tipo="mouse",
        this.cantidad=cantidad
    }
}
let verInventario=document.getElementById("verInventario")
let agregarInventario=document.getElementById("agregarInventario")
let buscarProductos=document.getElementById("buscarProductos")
let editarInventario=document.getElementById("editarInventario")
let borrarInventario=document.getElementById("borrarInventario")
let mostrar = document.getElementById("mostrar")
let subMenus = document.getElementById("subMenus")

const ver_inventario = ()=>{
    let productosrecuperados=JSON.parse(localStorage.getItem('productos'))
    if (!productosrecuperados){
        productosrecuperados=[]
    }
    const listaProductos= productosrecuperados
    subMenus.innerHTML=""
    mostrar.innerHTML=""
    let menuVerProductos= document.createElement("form")
    menuVerProductos.innerHTML=`<br>
    <button type="button" id="verTodo">Ver todo</button>
    <button type="button" id="verTeclado">Ver teclados</button>
    <button type="button" id="verMouse">Ver mouses</button>`
    subMenus.appendChild(menuVerProductos)
    let verTodo = document.getElementById("verTodo")
    let verTeclado = document.getElementById("verTeclado")
    let verMouse = document.getElementById("verMouse")
    verTodo.onclick= () =>{
        ver_teclado(listaProductos)
        ver_mouse(listaProductos)
    }
    verTeclado.onclick= () =>{
        ver_teclado(listaProductos)
    }
    verMouse.onclick= () =>{
        ver_mouse(listaProductos)
    }


}

const ver_teclado= (lista) =>{
    const teclados = tipo_teclado(lista)
    console.log(teclados)
    let titulo=document.createElement("h3")
    if (teclados.length>0){
        titulo.innerHTML=`Teclados`
        mostrar.appendChild(titulo)
        for(let teclado of teclados){
            let imprimirTeclado = document.createElement("p")
            imprimirTeclado.innerHTML=`
            <ul>
            <li>ID: ${teclado.id}, Marca: ${teclado.marca}, Nombre: ${teclado.nombre}, Tamaño: ${teclado.tamano}, Cantidad: ${teclado.cantidad}</li> 
            </ul>`
            mostrar.appendChild(imprimirTeclado)
        }
    }
    else{
        titulo.innerHTML=`No hay teclados`
        mostrar.appendChild(titulo)
    }
}
const ver_mouse=(lista) =>{
    const mouses = tipo_mouse(lista)
    let titulo=document.createElement("h3")
    if (mouses.length>0){
        titulo.innerHTML=`Mouses`
        mostrar.appendChild(titulo)
        for(let mouse of mouses){
            let imprimirMouse = document.createElement("p")

            imprimirMouse.innerHTML=`
            <ul>
            <li>ID: ${mouse.id}, Marca: ${mouse.marca}, Nombre: ${mouse.nombre}, Wireless: ${mouse.wireless}, Botones Laterales: ${mouse.botones_lat}, Cantidad: ${mouse.cantidad}</li> 
            </ul>`
            mostrar.appendChild(imprimirMouse)
        }
    }
    else{
        titulo.innerHTML=`No hay mouses`
        mostrar.appendChild(titulo)
    }
}

const agregar_inventario = ()=>{
    subMenus.innerHTML=``
    mostrar.innerHTML=``
    let menuVerProductos= document.createElement("form")
    menuVerProductos.innerHTML=`<br>
    <button type="button" id="agregarMouse">Agregar Mouse</button>
    <button type="button" id="agregarTeclado">Agregar Teclado</button>`
    subMenus.appendChild(menuVerProductos)
    let agregarMouse=document.getElementById("agregarMouse")
    let agregarTeclado=document.getElementById("agregarTeclado")
    agregarMouse.onclick= ()=>{
        agregar_mouse()
    }
    agregarTeclado.onclick= ()=>{
        agregar_teclado()
    }
}

const agregar_teclado = () =>{
    mostrar.innerHTML=``
    let cargaTeclado=document.createElement("form")
    cargaTeclado.innerHTML=`<p>Marca/Nombre/Tamaño/cantidad</p>
    <input type="text" id="marca"> <input type="text" id="nombre"> <input type="number" id="tamano"> 
    <input type="number" id="cantidad"> <button type="button" id="cargar">Cargar</button>`
    mostrar.appendChild(cargaTeclado)
    let cargar=document.getElementById("cargar")
    cargar.onclick= () => {
        let marca = document.getElementById("marca")
        let nombre = document.getElementById("nombre")
        let tamano = document.getElementById("tamano")
        let cantidad = document.getElementById("cantidad")
        const teclado = new Teclado(marca.value,nombre.value,tamano.value,cantidad.value)
        productos.push(teclado)
        localStorage.setItem('productos',JSON.stringify(productos))
    }

}
const agregar_mouse = () =>{
    mostrar.innerHTML=``
    let cargaMouse=document.createElement("form")
    cargaMouse.innerHTML=`<p>Marca/Nombre/Wireless/Botones laterales/Cantidad</p>
    <input type="text" id="marca"> <input type="text" id="nombre"> <select id=wireless> <option value="Si">si</option> <option value="NO">no</option> </select> <select id=botones_lat> <option value="Si">si</option> <option value="No">no</option> </select> <input type="number" id="cantidad"> <button type="button" id="cargar">Cargar</button>`
    mostrar.appendChild(cargaMouse)
    let cargar=document.getElementById("cargar")
    cargar.onclick = () =>{
        let marca = document.getElementById("marca")
        let nombre = document.getElementById("nombre")
        let wireless = document.getElementById("wireless")
        let botones_lat= document.getElementById("botones_lat")
        let cantidad = document.getElementById("cantidad")
        const mouse = new Mouse(marca.value,nombre.value,wireless.value,botones_lat.value,cantidad.value)
        productos.push(mouse)
        localStorage.setItem('productos',JSON.stringify(productos))
    }
}

const en_stock = (lista)=>{
    const nueva_lista= lista.filter(producto=> producto.cantidad>0)
    return nueva_lista
}
const tipo_teclado =(lista)=>{
    const nueva_lista= lista.filter(producto=> producto.tipo==="teclado")
    return nueva_lista
    
}
const tipo_mouse =(lista)=>{
    const nueva_lista = lista.filter(producto=> producto.tipo==="mouse")
    return nueva_lista
}

const buscar_productos = ()=>{
    let productosrecuperados=JSON.parse(localStorage.getItem('productos'))
    if (!productosrecuperados){
        productosrecuperados=[]
    }
    const listaProductos= productosrecuperados
    subMenus.innerHTML=``
    mostrar.innerHTML=``
    let menuBuscarProductos= document.createElement("form")
    menuBuscarProductos.innerHTML=`<br>
    <button type="button" id="buscarMarca">Buscar por Marca</button>
    <button type="button" id="buscarID">Buscar por id </button>`
    subMenus.appendChild(menuBuscarProductos)
    let buscarMarca = document.getElementById("buscarMarca")
    let buscarID = document.getElementById("buscarID")

    buscarMarca.onclick = ()=>{
        buscar_marca(listaProductos)
    }
    buscarID.onclick = ()=>{
        buscar_id(listaProductos)
    }
}

const buscar_id=(lista) => {
    mostrar.innerHTML=``
    let opciones=document.createElement("form")
    opciones.innerHTML=`<br>
    <p>Ingrese el numero de id.      Selecione el tipo de producto</p>
    <input type="number" id="Id"> <select id=tipoProducto> <option value="1">Teclado</option> <option value="2">Mouse</option> </select> <button type="button" id="buscar">Buscar</button>`
    mostrar.appendChild(opciones)
    let id=document.getElementById("Id")
    let tipoProducto=document.getElementById("tipoProducto")
    let buscar= document.getElementById("buscar")
    buscar.onclick=()=>{
        if((tipoProducto.value)=="1"){
            id=(id.value)+"t"
            let productoId=filtro_id(lista,id)
            ver_teclado(productoId)
        }
        else{
            id=(id.value)+"m"
            let productoId=filtro_id(lista,id)
            ver_mouse(productoId)
        }
    }

}

const buscar_marca = (lista)=>{
    mostrar.innerHTML=``
    let opciones=document.createElement("form")
    opciones.innerHTML=`<br>
    <select id=verProductos> <option value="1">Ver todos los productos</option> <option value="2">Ver solo los teclados</option> <option value="3">Ver solo los mouses</option> </select>
    <input type="text" id="marca"> <select id=enStock> <option value="1">Solo en Stock</option> <option value="2">Todos</option> </select> 
    <button type="button" id="buscar">Buscar</button>`
    mostrar.appendChild(opciones)
    let verProductos = document.getElementById("verProductos")
    let marca = document.getElementById("marca")
    let enStock = document.getElementById("enStock")
    let buscar = document.getElementById("buscar")
    buscar.onclick= ()=>{
        const nueva_lista = filtrar_marca(lista,marca.value)
        console.log(nueva_lista)
        if((enStock.value)=="1"){
            const lista_stock = en_stock(nueva_lista)
            if ((verProductos.value)=="2"){
                ver_teclado(lista_stock)
            }
            else if((verProductos.value)=="3"){
                ver_mouse(lista_stock)
            }
            else{
                ver_teclado(lista_stock)
                ver_mouse(lista_stock)
            }
        }
        else{
            if ((verProductos.value)=="2"){
                ver_teclado(nueva_lista)
            }
            else if((verProductos.value)=="3"){
                ver_mouse(nueva_lista)
            }
            else{
                ver_teclado(nueva_lista)
                ver_mouse(nueva_lista)
            }
        }
        
    }


}

const filtrar_marca = (lista,marca) =>{
    const nueva_lista = lista.filter(producto=> producto.marca == marca)
    return nueva_lista
}
const filtro_id =(lista,id)=>{
    const nueva_lista=lista.filter(producto=> producto.id==id)
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

verInventario.onclick = () =>{
    console.log(1)
    ver_inventario()
}
agregarInventario.onclick = () =>{
    console.log(2)
    agregar_inventario()
}
buscarProductos.onclick = () =>{
    console.log(3)
    buscar_productos()
}
editarInventario.onclick = () =>{
    console.log(4)
}
borrarInventario.onclick = () =>{
    localStorage.clear()
    console.log(1)
}



 