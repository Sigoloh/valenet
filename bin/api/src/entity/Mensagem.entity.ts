import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mensagem{
    @PrimaryGeneratedColumn('uuid')
    mensagem_id: string;

    @Column({type: 'text'})
    mensagem: string;

    @CreateDateColumn()
    created: Date;
}