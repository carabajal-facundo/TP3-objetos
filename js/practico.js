// Punto 1
let auto = {
    color:'',
    marca:'',
    modelo:'',
    encendido: false,
    constructor(color,marca,modelo,encendido){
        this.color=color;
        this.marca=marca;
        this.modelo=modelo;
        this.encendido=encendido;
    },
    encenderAuto(){this.encendido=true},
    apagarAuto(){this.encendido=false}
}

// Punto 2
document.write("<h1>Punto2</h1>");
let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar(dinero){this.saldo=dinero;},
    extraer(dinero){this.saldo-=dinero;},
    informar(){
        document.write("Estado de la cuenta<br>");
        document.write("Titular: "+this.titular+"<br>");
        document.write("Saldo: "+this.saldo+"<br><br>");
    }
}

cuenta.informar();
cuenta.ingresar(200);
cuenta.informar();
cuenta.extraer(100);
cuenta.informar();
document.write("<br><hr>");

// Punto 3
document.write("<h1>Punto3</h1>");
class Rectangulo{
    #alto;
    #ancho;
    constructor(alto, ancho){
        this.alto=alto;
        this.ancho=ancho;
    }
    modAlto(alto){this.alto=alto;}
    modAncho(ancho){this.ancho=ancho;}
    mostrarRectangulo(){
        document.write("El ancho es: "+this.ancho+"<br>");
        document.write("El alto es: "+this.alto+"<br>");
    }
    calcularPerimetro(){return 2*(this.alto+this.ancho)}
    calcularArea(){return this.ancho*this.alto}
}

let r1 = new Rectangulo(10,4);
r1.mostrarRectangulo();
document.write("perimetro de r1: "+r1.calcularPerimetro()+"<br>");
document.write("El area de r1: "+ r1.calcularArea()+"<br>")
document.write("<br><hr>");

// Punto 4
document.write("<h1>Punto4</h1>");
class Producto{
    #codigo;
    #nombre;
    #precio;
    constructor(nombre,precio,codigo){
        this.nombre=nombre;
        this.precio=precio;
        this.codigo=codigo;
    }
    impimirDatos(){
        document.write("Producto: " + this.nombre + "<br>");
        document.write("Precio: " + this.precio + "<br>");
        document.write("Codigo: " + this.codigo + "<br><br>");
    }
}

let productos = [
    prod1 = new Producto("prod1",100,001),
    prod2 = new Producto("prod2",200,002),
    prod3 = new Producto("prod3",300,003)
];

for(let i=0; i<3; i++) productos[i].impimirDatos();
document.write("<br><hr>");

// Punto 5
document.write("<h1>Punto5</h1>");
class Persona{
    #nombre;
    #dni;
    #edad;
    #sexo;
    #peso;
    #altura;
    #anioNac;
    constructor(nombre,edad,sexo,peso,altura,anioNac){
        this.#nombre=nombre;
        this.generarDNI();
        this.#edad=edad;
        this.#sexo=sexo;
        this.#peso=peso;
        this.#altura=altura;
        this.#anioNac=anioNac;
    }
    esMayorDeEdad(){
        if(this.edad>18) alert("Es mayor de edad");
        else alert("Es menor de edad");
    }
    mostrarDatos(){
        document.write("Nombre: " + this.#nombre + "<br>");
        document.write("Edad: " + this.#edad + "<br>");
        document.write("DNI: " + this.#dni + "<br>");
        document.write("Sexo: " + this.#sexo + "<br>");
        document.write("peso: " + this.#peso + "<br>");
        document.write("Altura: " + this.#altura + "<br>");
        document.write("Año de nacimiento: " + this.#anioNac + "<br><br>");
    }
    generarDNI(){
        this.#dni= Math.floor(Math.random() * (100000000-10000000)+10000000);
    }
    mostrarGeneracion(){
        if(this.#anioNac>=1930 && this.#anioNac<=1948){
            alert("Hola, "+ this.#nombre+" perteneces a la 'Silent Generation', la cual tiene como rasgo caracteristico la Austeridad");
        }
        else if(this.#anioNac>=1989 && this.#anioNac<=1968){
            alert("Hola, "+ this.#nombre+" perteneces a la 'Baby boom', la cual tiene como rasgo caracteristico la Ambicion");
        }
        else if(this.#anioNac>=1969 && this.#anioNac<=1980){
            alert("Hola, "+ this.#nombre+" perteneces a la 'Generacion X', la cual tiene como rasgo caracteristico la Obcecion por el exito");
        }
        else if(this.#anioNac>=1981 && this.#anioNac<=1994){
            alert("Hola, "+ this.#nombre+" perteneces a la 'Generacio Y', la cual tiene como rasgo caracteristico la Frustracion");
        }
        else if(this.#anioNac>1993){
            alert("Hola, "+ this.#nombre+" perteneces a la 'Generacion Z', la cual tiene como rasgo caracteristico la Irreberencia");
        }
    }
}

let p1 = new Persona('Facundo',24,'H',71.4,1.68,1998);

p1.esMayorDeEdad();
p1.mostrarDatos();
p1.mostrarGeneracion();
document.write("<br><hr>");

// Punto 6
document.write("<h1>Punto6</h1>");
class Libro{
    #ISBN;
    #titulo;
    #autor;
    #numeroPaginas;
    constructor(isbn,titulo,autor,numeroPag){
        this.#ISBN=isbn;
        this.#titulo=titulo;
        this.#autor=autor;
        this.#numeroPaginas=numeroPag;
    }
    get ISBN(){return this.#ISBN;}
    set ISBN(isbn){this.#ISBN=isbn;}

    get titulo(){return this.#titulo;}
    set titulo(newTitulo){this.#titulo=newTitulo;}

    get autor(){return this.#autor;}
    set autor(newAutor){this.#autor=newAutor;}

    get numeroPaginas(){return this.#numeroPaginas;}
    set numeroPaginas(newNumPag){this.#numeroPaginas=newNumPag;}

    mostrarLibro(){
        document.write(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numeroPaginas} paguinas<br>`);
    }
}

let libro1 = new Libro("a00001","Como uno aveces se siente","Facundo Carabajal",204);
let libro2 = new Libro("a00002","Si nos postulamos para precidente?","Facundo Carabajal",470);

libro1.mostrarLibro();
libro2.mostrarLibro();

if(libro1.numeroPaginas>libro2.numeroPaginas) document.write(`El libro '${libro1.titulo}' tiene mas paguinas que '${libro2.titulo}'`);
else document.write(`El libro '${libro2.titulo}' tiene mas paguinas que '${libro1.titulo}'`);
document.write("<br><hr>");

// Punto 7
document.write("<h1>Punto7</h1>");
class Contacto{
    #nombre;
    #telefono;
    constructor(nombre,telefono){
        this.#nombre=nombre;
        this.#telefono=telefono;
    }
    get nombre(){ return this.#nombre; }
    get telefono(){ return this.#telefono; }
    set nonmbre(newNombre){ this.#nombre=newNombre; }
    set telefono(newTelefono){ this.#telefono=newTelefono; }
    igualcontacto(contact){
        if(contact==this.#nombre) return true;
        else return false;
    }
}

class Agenda{
    #contactos= [];
    #topContactos = 10;
    constructor(topeContactos) { 
        if(topeContactos>0){
            this.#topContactos=topeContactos 
        }
    }

    agregarContacto(contacto){
        if(this.agendaLlena()) alert("La agenda esta llena");
        else if(this.existeContacto(contacto.nombre)) alert("El contacto ya existe");
            else this.#contactos.push(contacto);
    }

    existeContacto(contacto){
        let existe=false;
        for(let i of this.#contactos){
            if(i.igualcontacto(contacto)) existe=true;
            i++;
        }
        return existe;
    }

    listarContactos(){
        document.write("<h2>Listado de los contactos en la agenda</h2>");
        for(let i of this.#contactos){
            document.write("Nombre: "+i.nombre+"<br>");
            document.write("Telefono: "+i.telefono+"<br><br>");
        }
    }

    buscarContacto(nombreContacto){
        for(let i of this.#contactos){
            if(i.nombre==nombreContacto) alert(`El numero del contacto ${nombreContacto} es: ${i.telefono}`);
        }
    }

    eliminarContacto(nombre){
        let indiceContacto=0;
        if(this.existeContacto(nombre)){
            for(let i=0; i<this.#contactos.length; i++ ){
                if(this.#contactos[i]!=nombre) indiceContacto++;
            }
            this.#contactos.splice((indiceContacto-1),1);
        }

    }

    agendaLlena(){
        if(this.#contactos.length == this.#topContactos) return true;
        else return false;
    }

    huecosLibres(){
        if(this.#contactos.length==this.#topContactos) alert("No quedan huecos libres en la agenda");
        else alert("Quedan "+(this.#topContactos - this.#contactos.length)+" huecos libres en la agenda");
    }
}
/*
let stop=true;
let agendaContactos = new Agenda(prompt("Ingrese la cantidad de contactos que tendra la agenda"));
while(stop){
    let opcion=prompt("1. Añadidir contacto - 2. Eliminar un contacto - 3. Buscar un contacto - 4. Listar la agenda");
    switch (parseInt(opcion)){
        case 1:
            let contacto = new Contacto(prompt("Nombre del contacto"),prompt("Telefono del contacto"));
            agendaContactos.agregarContacto(contacto);
            break;
        case 2:
            agendaContactos.eliminarContacto(prompt("Ingrese el nombre del contacto a eliminar"));
            break;
        case 3:
            agendaContactos.buscarContacto(prompt("Ingrese el nombre del contacto que decea buscar"));
            break;
        case 4:
            agendaContactos.listarContactos();
            break;
    }    
    stop = confirm("Decea realizar alguna accion con la agenda?");
}
*/

// Punto 8
document.write("<h1>Punto8</h1>");
class Persona1{
    #nombre;
    #edad;
    #profecion;
    constructor(nombre,edad,profecion){}
    saludar(){document.write("hola soy "+this.#nombre+".<br>")}
    despedirce(){document.write("bueno hora de despedirme, adios.<br>")}
}

let per1 = new Persona1("Facundo",24,"programador");
let per2 = new Persona1("Silvio",21,"kinesiologo");
per1.saludar();
per1.despedirce();
per2.saludar();
per2.despedirce();
document.write("<br><hr>");

// Punto 9
document.write("<h1>Punto9</h1>");
class Animal{
    #nombre;
    #edad;
    constructor(nombre,edad){
        this.#nombre=nombre;
        this.#edad=edad;
    }
    emitirSonido(){ }
}

class Perro extends Animal{
    emitirSonido(){document.write("*Se emiten sonidos de perro*<br>")}
}

class Gato extends Animal{
    emitirSonido(){document.write("*Se emiten sonidos de gato*<br>")}
}

let perro1 = new Perro("Ronti",4);
let gato1 = new Gato("Paco",5);

perro1.emitirSonido();
gato1.emitirSonido();
document.write("<br><hr>");

// Punto 10
document.write("<h1>Punto10</h1>");
class Aeropuerto{
    #nombreAeropuerto;
    #aviones = [];
    constructor(nombreAeropuerto) {this.#nombreAeropuerto=nombreAeropuerto;}
    buscarAvion(nomAvion){
        for(const i of this.#aviones){
           if(i.nombre == nomAvion) i.mostrarAvion();
        }
    }
    agregarAvion(avion){ this.#aviones.push(avion); }
}

class Avion{
    #nombre;
    #capacidad;
    #destino;
    #pasajeros = [];
    constructor(nombre,capacidad,destino){
        this.#nombre=nombre;
        this.#capacidad=capacidad;
        this.#destino=destino;
    }
    get nombre(){ return this.#nombre; }
    abordar(nomPasajero){
        if(this.#pasajeros.length==this.#capacidad) alert("Se alcanzo la capacidad maxima de pasajeros en el avion");
        else this.#pasajeros.push(nomPasajero);
    }
    mostrarAvion(){
        document.write(`Avion: ${this.#nombre}<br>`);
        document.write(`Capacidad: ${this.#capacidad}<br>`);
        document.write(`Destino: ${this.#destino}<br>`);
        document.write(`Pasajeros: <br>`);
        for(let i=0; i<this.#pasajeros.length; i++){
            document.write(`-- ${this.#pasajeros[i]} -- `);
        }
    }
}

let Aeropuerto1 = new Aeropuerto("Aeropuerto Internacional");
let avion1 = new Avion("Avion 1", 4, "Argentina");
let avion2 = new Avion("Avion 2", 5, "España");
let avion3 = new Avion("Avion 3", 2, "Canada");

avion1.abordar("Alejandro");
avion2.abordar("Esteban");
avion3.abordar("Facundo");
avion3.abordar("Fabricio");

Aeropuerto1.agregarAvion(avion1);
Aeropuerto1.agregarAvion(avion2);
Aeropuerto1.agregarAvion(avion3);

Aeropuerto1.buscarAvion("Avion 3");

document.write("<br><hr>");