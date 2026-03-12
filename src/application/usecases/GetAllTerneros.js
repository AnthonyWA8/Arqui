export default class GetAllTerneros {
 constructor(TerneroRepository) {
  this.TerneroRepository = TerneroRepository;
 }
async execute() {
  return await this.TerneroRepository.findAll();
 }
}