import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {

    public id!: number;
    public alergias!: string;

    constructor() { super() }
}
