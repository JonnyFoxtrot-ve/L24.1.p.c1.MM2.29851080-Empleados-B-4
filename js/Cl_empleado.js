export default class Cl_empleado {
  constructor(nombre, tipo, monto) {
    (this.nombre = nombre), (this.tipo = tipo), (this.monto = monto);
  }

  set tipo(tipo) {
    this._tipo = tipo;
  }

  get tipo() {
    return this._tipo;
  }

  montoPagar() {
    let d = 0;
    let p = 0;
    if (this._tipo == 1) {
      d = this.monto * 0.2;
      p = d + this.monto;
      return p;
    } else {
      d = this.monto * 0.1;
      p = d + this.monto;
      return p;
    }
  }
}
