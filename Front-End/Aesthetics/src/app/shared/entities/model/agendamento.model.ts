import { Cliente } from "./cliente.model";
import { Profissional } from "./profissional.model";
import { Servico } from "./servico.model";

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