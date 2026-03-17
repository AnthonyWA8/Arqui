export default class GetAllVentas {
 constructor(VentaRepository) {
  this.VentaRepository = VentaRepository;
 }
async execute() {
  return await this.VentaRepository.findAll();
 }
}