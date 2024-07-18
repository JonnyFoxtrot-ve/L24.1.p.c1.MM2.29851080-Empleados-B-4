export default class Cl_empresa {
  constructor() {
    this.acum = 0;
  }

  montoPagar() {
    return this.acum;
  }
  procesare(e) {
    this.acum += e.montoPagar();
  }
}
