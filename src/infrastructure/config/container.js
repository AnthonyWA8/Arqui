import MongoTerneroRepository from "../repositories/MongoTerneroRepository.js";
import CreateTernero       from "../../application/usecases/CreateTernero.js";
import GetAllTerneros from "../../application/usecases/GetAllTerneros.js"; 
import TerneroController     from "../controllers/TerneroController.js";
// 1. Repositorio
const repository = new MongoTerneroRepository();
// 2. Use cases
const createTernero  = new CreateTernero(repository);
const getAllTerneros  = new GetAllTerneros(repository);
// 3. Controller
const terneroController = new TerneroController({
 createTernero,
 getAllTerneros,
});

export { terneroController as TerneroController };
