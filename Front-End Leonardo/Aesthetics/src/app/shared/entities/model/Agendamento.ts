import { Cliente } from "./Cliente";
import { Profissional } from "./Profissional";
import { Servico } from "./Servico";

export class Agendamento {

    public id!: number;
    public agendamentoDataHora!: Date;
    public duracao!: Date;
    public finalizacaoAgendamento!: Date;

    public cliente!: Cliente;
    public profissional!: Profissional;
    public servico!: Servico;

    constructor() { }
}