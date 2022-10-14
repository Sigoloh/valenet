import { Mensagem } from "../entity/Mensagem.entity";
import { getOnePhrase } from "../providers/PensadorProvider";
import { IFraseRepository } from "../repositories/interfaces/IFraseRepository";

export class FraseService{
    constructor(
        private fraseRepository: IFraseRepository
    ){}
    async createFrase(): Promise<void>{
        const frases = await getOnePhrase();
        const soAsFrases = frases.map(element => {
            return element.texto;
        })

        await this.fraseRepository.saveFrases(soAsFrases);
    }

    async getAllFrases(): Promise<Mensagem[]>{
        const frases = await this.fraseRepository.getFrases();
        return frases;
    }
}