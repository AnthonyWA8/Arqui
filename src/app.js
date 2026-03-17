import express    from "express";
import TerneroRoutes from "./infrastructure/routes/TerneroRoutes.js";
import VentaRoutes from "./infrastructure/routes/VentaRoutes.js";
import { TerneroController } from "./infrastructure/config/container.js";
import { VentaController } from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());

app.use("/api", TerneroRoutes(TerneroController));
app.use("/api", VentaRoutes(VentaController));

export default app;
