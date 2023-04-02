export abstract class Pessoa {

    public id!: number;
    public cpf!: string;
    public endereco!: string;
    public telefoneFixo!: string;
    public telefoneCelular!: string;
    public email!: string;

    constructor() { }
}

export class Cliente extends Pessoa {

    public alergias!: string;
    public agendamentosRealizados!: Agendamento[];

    constructor() { super() }
}

export class Profissional extends Pessoa {

    public instagram!: string;
    public servicosDisponiveis!: Servico[];
    public agendamentosRealizados!: Agendamento[];

    constructor() { super() }
}

export class Servico {

    public nome!: string;
    public descricao!: string;
    public valor!: string;
    public profissionais!: Profissional[];
    public agendamentos!: Agendamento[];

    constructor() { }
}

export class Agendamento {



    constructor() { }
}