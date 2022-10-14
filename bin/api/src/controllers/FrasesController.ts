import { Request, Response } from "express";
import { IFraseService } from "../services/interfaces/IFraseService";

export class FrasesController{
    constructor(
        private frasesService: IFraseService
    ){}

    async create(request: Request, response: Response): Promise<void>{
        try{
            await this.frasesService.createFrase();
            response.sendStatus(200);
        }catch(error){
            console.log(error);
            response.sendStatus(500);
        }
    }

    async get(request: Request, response: Response): Promise<void>{
        try{
            const frases = await this.frasesService.getAllFrases()
            response.json(frases);
        }catch{
            response.sendStatus(500);
        }
    }
}