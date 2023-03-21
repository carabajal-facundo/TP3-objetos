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
// git commit -m "Se agrego los puntos 1 y 2"