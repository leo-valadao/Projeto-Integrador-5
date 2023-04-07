import { Pessoa } from "../model/Pessoa";

export class ClienteDTO extends Pessoa {

    public id!: number;
    public alergias!: string;

    public idsAgendamentosRealizados!: number[];

    constructor() { super() }
}