import { Request, Response, Router } from "express";
import { FrasesController } from "../controllers/FrasesController";
import { FraseRepository } from "../repositories/FraseRepository";
import { FraseService } from "../services/FrasesService";

export const router = Router();

const repository = new FraseRepository();
const service = new FraseService(repository);
const constroller = new FrasesController(service);
router.post('/create', async (request:Request, response: Response) => {
    await constroller.create(request, response);
})

router.get('/get',async (request:Request, response: Response) => {
   await constroller.get(request, response); 
})