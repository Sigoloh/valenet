import { database } from "../../app-data-source";
import { Mensagem } from "../entity/Mensagem.entity";
import { IFraseRepository } from "./interfaces/IFraseRepository";

export class FraseRepository implements IFraseRepository{
    private defaultRepository = database.getRepository(Mensagem);
    async saveFrases(frases: string[]): Promise<void>{
        for(const frase of frases){
            await this.defaultRepository.save({
                mensagem: frase
            })
        }
    }

    async getFrases(): Promise<Mensagem[]>{
        const mensagens = await this.defaultRepository.find();
        return mensagens;
    }
}