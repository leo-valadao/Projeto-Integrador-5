import { Pessoa } from "./pessoa.model";
import { Servico } from "./servico.model";

export class Profissional extends Pessoa {

    public id!: number;
    public instagram!: string;

    public servicosDisponiveis!: Servico[];

    constructor() { super() }
}