import Cl_empleado from "./Cl_empleado.js";
import Cl_empresa from "./Cl_empresa.js";

let empleado1 = new Cl_empleado("Juan", 1, 100);
let empleado2 = new Cl_empleado("Ana", 1, 120);
let empleado3 = new Cl_empleado("Lin", 2, 200);
let empleado4 = new Cl_empleado("Mary", 1, 50);
let empleado5 = new Cl_empleado("Carlos", 2, 150);

let empresa = new Cl_empresa();

empresa.procesare(empleado1);
empresa.procesare(empleado2);
empresa.procesare(empleado3);
empresa.procesare(empleado4);
empresa.procesare(empleado5);

let salida = document.getElementById("salida");
salida.innerHTML += `<br> ${
  empleado1.nombre
} tendrá un sueldo de ${empleado1.montoPagar()}$`;
salida.innerHTML += `<br> ${
  empleado2.nombre
} tendrá un sueldo de ${empleado2.montoPagar()}$`;
salida.innerHTML += `<br> ${
  empleado3.nombre
} tendrá un sueldo de ${empleado3.montoPagar()}$`;
salida.innerHTML += `<br> ${
  empleado4.nombre
} tendrá un sueldo de ${empleado4.montoPagar()}$`;
salida.innerHTML += `<br> ${
  empleado5.nombre
} tendrá un sueldo de ${empleado5.montoPagar()}$`;

salida.innerHTML += `<br> El total de sueldo que debe pagar la empresa es de : ${empresa.montoPagar()}$`;
