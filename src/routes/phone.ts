import express, { Request, Response } from "express";
import { PhoneService } from "../services/phone";

const router = express.Router();

router.get("/api/:number/number", (req: Request, res: Response) => {
  const id = PhoneService.findOne(req.params.number);
  res.send({ number: id });
});

export { router as phoneRoutes };
