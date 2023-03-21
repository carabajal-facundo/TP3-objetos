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
document.write("<br><hr>")

// Punto 3
document.write("<h1>Punto3</h1>");
class Rectangulo{
    alto;
    ancho;
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
document.write("<br><hr>")

// Punto 4
document.write("<h1>Punto4</h1>");
class Producto{
    codigo;
    nombre;
    precio;
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
document.write("<br><hr>")

// Punto 5

class Persona{
    nombre;
    dni;
    edad;
    sexo;
    peso;
    altura;
    anioNac;
    constructor(nombre,dni,edad,sexo,peso,altura,anioNac){
        this.nombre=nombre;
        this.dni=dni;
        this.edad=edad;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNac=anioNac;
    }
    esMayorDeEdad(){
        if(this.edad>18) alert("Es mayor de edad");
        else alert("Es menor de edad");
    }
    mostrarDatos(){
        document.write("Nombre: " + this.nombre + "<br>");
        document.write("Edad: " + this.Edad + "<br>");
        document.write("DNI: " + this.dni + "<br>");
        document.write("Sexo: " + this.sexo + "<br>");
        document.write("peso: " + this.peso + "<br>");
        document.write("Altura: " + this.altura + "<br>");
        document.write("Año de nacimiento: " + this.anioNac + "<br><br>");
    }
    generarDNI(){
        this.dni= Math.floor(Math.random() * (100000000-10000000)+10000000);
    }
    mostrarGeneracion(){}
}