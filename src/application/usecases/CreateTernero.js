import Ternero from "../../domain/entities/Ternero.js";
export default class CreateTernero {
 constructor(TerneroRepository) {
  this.TerneroRepository = TerneroRepository;
 }

 async execute({ sku, price }) {
  const ternero = new Ternero({ sku, price});
  return await this.TerneroRepository.save(Ternero);
 }
}

