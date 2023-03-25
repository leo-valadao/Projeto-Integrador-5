package com.senac.aesthetics.domain;

import java.time.LocalDateTime;
import java.time.LocalTime;

public class Agendamento {

    // Atributos: 
    private LocalDateTime agendamentoDataHora;
    private LocalTime duracao;
    private LocalDateTime finalizacaoAgendamento;

    // Relacionamentos:
    private Cliente cliente;
    private Profissional profissional;

}
