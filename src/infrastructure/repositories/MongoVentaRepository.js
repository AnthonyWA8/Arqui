import VentaRepository from "../../domain/repositories/VentaRepository.js";
import VentaModel from "../database/models/VentaModel.js";

export default class MongoVentaRepository extends VentaRepository {


  async save(venta) {
    await VentaModel.findOneAndUpdate(
      { num_venta: venta.num_venta },
      venta,
      { upsert: true, new: true }
    );
   

    return venta;
  }

  async findAll() {
    return await VentaModel.find();
  }

  async findBynum_venta(num_venta) {
    return await VentaModel.findOne({ num_venta }) ?? null;
  }

  async delete(id) {
    const result = await VentaModel.findOneAndDelete({ id });
    if (!result) throw new Error(`Venta with id "${id}" not found`);
  }
}