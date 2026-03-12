import { Router } from "express";
export default function TerneroRoutes(controller) {
 const router = Router();

 router.post ("/terneros",   (req, res) => controller.create(req, res));
 router.get  ("/terneros",   (req, res) => controller.getAll(req, res));
 return router;
}