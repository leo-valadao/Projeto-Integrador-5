import { Pessoa } from "./pessoa.model";

export class Cliente extends Pessoa {

    public id!: number;
    public alergias!: string;

    constructor() { super() }
}
