import { Pessoa } from "./Pessoa";
import { Agendamento } from "./Agendamento";

export class Cliente extends Pessoa {

    public id!: number;
    public alergias!: string;

    public agendamentosRealizados!: Agendamento[];

    constructor() { super() }
}
