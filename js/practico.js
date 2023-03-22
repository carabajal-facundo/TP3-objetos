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