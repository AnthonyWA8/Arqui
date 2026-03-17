import { Schema, model } from "mongoose";

const ventaSchema = new Schema({
  num_venta:   { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

export default model("Venta", ventaSchema);