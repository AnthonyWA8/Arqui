export default class VentaController {
 constructor({ createVenta, getAllVentas }) {
  this.createVenta  = createVenta;
  this.getAllVentas  = getAllVentas; 
}
async create(req, res) {
  try {
   const Venta = await this.createVenta.execute(req.body);
   res.status(201).json(Venta);
  } catch (err) {
   res.status(400).json({ error: err.message });
  }
 }
 async getAll(req, res) {
  try {
   const Ventas = await this.getAllVentas.execute();
   res.status(200).json(Ventas);
  } catch (err) {
   res.status(500).json({ error: err.message });
  }
 }
}