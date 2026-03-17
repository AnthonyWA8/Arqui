import TerneroRepository from "../../domain/repositories/TerneroRepository.js";
import TerneroModel from "../database/models/TerneroModel.js";

export default class MongoTerneroRepository extends TerneroRepository {


  async save(ternero) {
    await TerneroModel.findOneAndUpdate(
      { sku: ternero.sku },
      ternero,
      { upsert: true, new: true }
    );
    // async save(ternero) {
    // const result = await TerneroModel.findOneAndUpdate(
    //   { sku: ternero.sku },
    //   { sku: ternero.sku, price: ternero.price },
    //   { upsert: true, new: true }
    // );

    return ternero;
  }

  async findAll() {
    return await TerneroModel.find();
  }

  async findBySku(sku) {
    return await TerneroModel.findOne({ sku }) ?? null;
  }

  async delete(id) {
    const result = await TerneroModel.findOneAndDelete({ id });
    if (!result) throw new Error(`Ternero with id "${id}" not found`);
  }
}