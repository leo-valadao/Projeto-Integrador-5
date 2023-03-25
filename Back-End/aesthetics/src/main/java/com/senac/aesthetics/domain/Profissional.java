package com.senac.aesthetics.domain;

import java.util.Set;

public class Profissional extends Pessoa {

    // Relacionamentos:
    private Set<Servico> servicosDisponiveis;
    private Set<Agendamento> agendamentosRealizados;    

}
