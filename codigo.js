

// //usuario ya resgitrado debe ingresar sus credenciales para ingresar a la APP de compras
function inicio(){
    let clave=1234;
    let usuario="fernando";
    const listaBox=["Chalecos","Calleras","Muñqueras","Cinturones","Magnesio",];
        

    if (document.form.password.value==clave && document.form.login.value==usuario){
        alert("Bienvenido a Clean Crossfit "+usuario);
        alert(listaBox);
        window.location="turnos.html";
    }else{
        alert("Usuario o Password incorrectos, intente nuevamente:");
    }

}



//usuario ingresa lo que quiere comprar 
function reservar(){ 

let articulos=prompt("INGRESA LOS PRODUCTOS QUE DESEAS COMPRAR:\nCHALECO\nCALLERAS\nMUÑEQUERAS\nCINTURON\nMAGNESIO\n(s-para salir)");
let cantidad=0;
let medida;
let precio=0;


while(articulos!="s" && articulos!="S"){
    switch(articulos){
        case "chaleco":
        case "CHALECO":
            medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
            chalec1.mostrarChalec();
            alert("SELECCIONO CHALECO)");
            cantidad=cantidad+1;
            precio=precio+36000;            
            break;
        case "calleras":
        case "CALLERAS":
            medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
            callera1.mostrarCalleras();
            alert("SELECCIONO CALLERAS");
            cantidad=cantidad+1;
            precio=precio+7000;
            break;
        case "muñequeras":
        case "MUÑEQUERAS":  
            medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
            munequera1.mostrarMunequera();
            alert("SELECCIONO MUÑEQUERAS");
            cantidad=cantidad+1;
            precio=precio+5000;
            break;
        case "cinturon":
        case "CINTURON":
            medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
            cinturon1.mostrarCinturon();
            alert("SELECCIONO CINTURON");
            cantidad=cantidad+1;
            precio=precio+46000;
            break;
        case "magnesio":
        case "MAGNESIO":
            medida=prompt("INGRESE LOS KG: \nA-1KG\nB-2KG\nC-3 KG\n(s-para salir) ")
            magnesio1.mostrarMagnesio();
            alert("SELECCIONO MAGNESIO");
            cantidad=cantidad+1;
            precio=precio+2000;
            break;
        default:
            alert("NO CORRESPONDE A UN PRODUCTO DE CROSSFIT");
            break;
    }
    articulos=prompt("SI QUIERES SUMAR OTRO PRODUCTO SELLECIONALO: \nCHALECO\nCALLERAS\nMUÑEQUERAS\nCINTURON\nMAGNESIO (s-para salir)");
}
alert("CANTIDAD DE PRODUCTOS SELECCIONADOS: "+cantidad);
alert("Total a pagar $"+precio);

}

//Muestra el detalle de chalecos

class Chalec{
    //constructor de objetos de tipo Chalecos
    constructor(tipo,color,modelo, precio){
        this.tipo=tipo;
        this.color=color;
        this.modelo=modelo;
        this.precio=precio;
    }
    //metodo de los objetos de la clase Chalec
        mostrarChalec(){
        alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
    }
}

const chalec1=new Chalec("Chaleco","Camuflado","S-3","$ 36000");
const chalec2=new Chalec("Chaleco","Negro","K-2","$ 14800");


//Muestra el detalle de Objeto calleras
class Calleras{
    //constructor de objetos de tipo Calleras
    constructor(tipo,color,modelo, precio){
        this.tipo=tipo;
        this.color=color;
        this.modelo=modelo;
        this.precio=precio;
    }
    //metodo de los objetos de la clase Calleras
        mostrarCalleras(){
        alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
    }
}

const callera1=new Calleras("Calleras","Gris","S-3","$ 7000");
const callera2=new Calleras("Calleras","Negro","K-2","$ 7000");

//Muestra el detalle de Objeto muñequeras
class Munequera{
    //constructor de objetos de tipo Muñqueras
    constructor(tipo,color,modelo, precio){
        this.tipo=tipo;
        this.color=color;
        this.modelo=modelo;
        this.precio=precio;
    }
    //metodo de los objetos de la clase Muñequeras
        mostrarMunequera(){
        alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
    }
}

const munequera1=new Munequera("Muñequeras","Roja","S-3","$ 5000");
const munequera2=new Munequera("Muñequeras","Verde","K-2","$ 5000");

//Muestra el detalle de Objeto Cinturon
class Cinturon{
    //constructor de objetos de tipo Cinturon
    constructor(tipo,color,modelo, precio){
        this.tipo=tipo;
        this.color=color;
        this.modelo=modelo;
        this.precio=precio;
    }
    //metodo de los objetos de la clase Cinturon
        mostrarCinturon(){
        alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
    }
}

const cinturon1=new Cinturon("Cinturon","Marron","S-3","$ 46000");
const cinturon2=new Cinturon("Cinturon","Violeta","K-2","$ 46000");

//Muestra el detalle de Objeto Magnesio
class Magnesio{
    //constructor de objetos de tipo Magnesio
    constructor(tipo,color,modelo, precio){
        this.tipo=tipo;
        this.color=color;
        this.modelo=modelo;
        this.precio=precio;
    }
    //metodo de los objetos de la clase Magnesio
        mostrarMagnesio(){
        alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
    }
}

const magnesio1=new Magnesio("Magnesio","blanco","S-3","$ 2000");
const magnesio2=new Magnesio("Magnesio","blanco","K-2","$ 2000");












