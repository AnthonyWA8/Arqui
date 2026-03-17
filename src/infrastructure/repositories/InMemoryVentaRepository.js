import VentaRepository from "../../domain/repositories/VentaRepository.js";
export default class InMemoryVentaRepository extends VentaRepository {
 constructor() {
  super();
  this.ventas = [];
  }
  async save(Venta) {
  const index = this.Ventas.findIndex(p => p.id === Venta.id);
  if (index >= 0) {
   this.Ventas[index] = Venta;
  } else {
   this.Ventas.push(venta);
  }
  return Venta;
  }
  async findAll() {
  return this.Ventas;
 }
}