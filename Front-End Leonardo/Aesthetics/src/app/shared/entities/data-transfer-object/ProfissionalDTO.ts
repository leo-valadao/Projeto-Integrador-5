import { Pessoa } from "../model/Pessoa"

export class ProfissionalDTO extends Pessoa {

    public id!: number;
    public instagram!: string;
    
    public idsServicosDisponiveis!: number[];
    public idsAgendamentosRealizados!: number[];

    constructor() { super() }
}