import MongoTerneroRepository from "../repositories/MongoTerneroRepository.js";
import CreateTernero       from "../../application/usecases/CreateTernero.js";
import GetAllTerneros from "../../application/usecases/GetAllTerneros.js"; 
import TerneroController     from "../controllers/TerneroController.js";

import MongoVentaRepository from "../repositories/MongoVentaRepository.js";
import CreateVenta       from "../../application/usecases/CreateVenta.js";
import GetAllVentas from "../../application/usecases/GetAllVentas.js"; 
import VentaController     from "../controllers/VentaController.js";

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

const repositoryV = new MongoVentaRepository();

const createVenta  = new CreateVenta(repositoryV);
const getAllVentas  = new GetAllVentas(repositoryV);

const ventaController = new VentaController({
 createVenta,
 getAllVentas,
});

export { terneroController as TerneroController };

export { ventaController as VentaController };