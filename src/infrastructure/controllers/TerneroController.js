export default class TerneroController {
 constructor({ createTernero, getAllTerneros }) {
  this.createTernero  = createTernero;
  this.getAllTerneros  = getAllTerneros; 
}
async create(req, res) {
  try {
   const Ternero = await this.createTernero.execute(req.body);
   res.status(201).json(Ternero);
  } catch (err) {
   res.status(400).json({ error: err.message });
  }
 }
 async getAll(req, res) {
  try {
   const Terneros = await this.getAllTerneros.execute();
   res.status(200).json(Terneros);
  } catch (err) {
   res.status(500).json({ error: err.message });
  }
 }
}
