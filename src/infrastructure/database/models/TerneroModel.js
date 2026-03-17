import { Schema, model } from "mongoose";

const terneroSchema = new Schema({
  sku:   { type: String, required: true, unique: true },
  weight: { type: Number, required: true },
});

export default model("Ternero", terneroSchema);