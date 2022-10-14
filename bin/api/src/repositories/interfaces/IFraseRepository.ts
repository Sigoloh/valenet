import { Mensagem } from "../../entity/Mensagem.entity";

export interface IFraseRepository{
    saveFrases(frases: string[]): Promise<void>
    getFrases(): Promise<Mensagem[]>
}