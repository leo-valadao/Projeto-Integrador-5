import { Profissional } from "./Profissional";

export class Servico {

    public id!: number;
    public nome!: string;
    public descricao!: string;
    public valor!: string;

    public profissionais!: Profissional[];

    constructor() { }
}