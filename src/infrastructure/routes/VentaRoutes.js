import { Router } from "express";
export default function VentaRoutes(controller) {
 const router = Router();

 router.post ("/ventas",   (req, res) => controller.create(req, res));
 router.get  ("/ventas",   (req, res) => controller.getAll(req, res));
 return router;
}