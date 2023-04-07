export class AgendamentoDTO {

    public id!: number;
    public agendamentoDataHora!: Date;
    public duracao!: Date;
    public finalizacaoAgendamento!: Date;

    public idCliente!: number;
    public idProfissional!: number;
    public idServico!: number;

    constructor() { }
}