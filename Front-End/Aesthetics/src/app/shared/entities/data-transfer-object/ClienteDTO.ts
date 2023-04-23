import { Pessoa } from "../model/Pessoa";

export class ClienteDTO extends Pessoa {

    public id!: number;
    public alergias!: string;

    constructor() { super() }
}