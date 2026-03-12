import express    from "express";
import TerneroRoutes from "./infrastructure/routes/TerneroRoutes.js";
import { TerneroController } from "./infrastructure/config/container.js";

const app = express();
app.use(express.json());

app.use("/api", TerneroRoutes(TerneroController));

export default app;
