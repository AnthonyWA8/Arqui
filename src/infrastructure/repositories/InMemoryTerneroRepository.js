import TerneroRepository from "../../domain/repositories/TerneroRepository.js";
export default class InMemoryTerneroRepository extends TerneroRepository {
 constructor() {
  super();
  this.terneros = [];
  }
  async save(Ternero) {
  const index = this.Terneros.findIndex(p => p.id === Ternero.id);
  if (index >= 0) {
   this.Terneros[index] = Ternero;
  } else {
   this.Terneros.push(Ternero);
  }
  return Ternero;
  }
  async findAll() {
  return this.Terneros;
 }
}
