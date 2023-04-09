import { Pessoa } from "./Pessoa";
import { Servico } from "./Servico";
import { Agendamento } from "./Agendamento";

export class Profissional extends Pessoa {

    public id!: number;
    public instagram!: string;
    
    public servicosDisponiveis!: Servico[];

    constructor() { super() }
}