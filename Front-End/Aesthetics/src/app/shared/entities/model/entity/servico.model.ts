import { Profissional } from "./profissional.model";

export class Servico {

    public id!: number;
    public nome!: string;
    public descricao!: string;
    public valor!: string;

    public profissionaisDisponiveis!: Profissional[];

    constructor() { }
}