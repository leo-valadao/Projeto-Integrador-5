import { Profissional } from "./Profissional";
import { Agendamento } from "./Agendamento";

export class Servico {

    public id!: number;
    public nome!: string;
    public descricao!: string;
    public valor!: string;
    public profissionais!: Profissional[];
    public agendamentos!: Agendamento[];

    constructor() { }
}