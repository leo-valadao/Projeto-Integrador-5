import { Pessoa } from "./Pessoa";
import { Servico } from "./Servico";

export class Profissional extends Pessoa {

    public id!: number;
    public instagram!: string;

    public servicosDisponiveis!: Servico[];

    constructor() { super() }
}