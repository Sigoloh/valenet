import { Mensagem } from "../../entity/Mensagem.entity";

export interface IFraseService{
    createFrase(): Promise<void>
    getAllFrases(): Promise<Mensagem[]>
}