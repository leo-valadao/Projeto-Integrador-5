export class ServicoDTO {

    public id!: number;
    public nome!: string;
    public descricao!: string;
    public valor!: string;
    
    public idsProfissionais!: number[];
    public idsAgendamentos!: number[];

    constructor() { }
}