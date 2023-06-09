package com.senac.aesthetics.entities.model;

import java.time.LocalDateTime;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Lombok:
@Getter
@Setter
@NoArgsConstructor

// JPA:
@Entity(name = "Agendamento")
@Table(name = "AGENDAMENTOS")
public class Agendamento {

    // Atributos:
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_AGENDAMENTO", nullable = false)
    private Long id;

    @Column(name = "AGENDAMENTO_DATA_HORA", columnDefinition = "TIMESTAMP", nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm:ss", locale = "pt_BR")
    @FutureOrPresent(message = "O Agendamento Só Pode Ser Feito Para Agora ou No Futuro!")
    private LocalDateTime agendamentoDataHora;

    @Column(name = "DURACAO", columnDefinition = "TIME", nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm:ss", locale = "pt_BR")
    private LocalTime duracao;

    @Column(name = "FINALIZACAO_AGENDAMENTO", columnDefinition = "TIMESTAMP", nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm:ss", locale = "pt_BR")
    @FutureOrPresent(message = "A Finalização do Agendamento Só Pode Ser Feito Para Agora ou No Futuro!")
    private LocalDateTime finalizacaoAgendamento;

    // Relacionamentos:
    @ManyToOne(fetch = FetchType.EAGER, optional = false, targetEntity = com.senac.aesthetics.entities.model.Cliente.class)
    @JoinColumn(name = "ID_CLIENTE_FK", referencedColumnName = "ID_CLIENTE", nullable = false)
    @NotNull(message = "O Agendamento Não Pode Ser Feito Sem Cliente!")
    private Cliente cliente;

    @ManyToOne(fetch = FetchType.EAGER, optional = false, targetEntity = com.senac.aesthetics.entities.model.Profissional.class)
    @JoinColumn(name = "ID_PROFISSIONAL_FK", referencedColumnName = "ID_PROFISSIONAL", nullable = false)
    @NotNull(message = "O Agendamento Não Pode Ser Feito Sem Profissional!")
    private Profissional profissional;

    @ManyToOne(fetch = FetchType.EAGER, optional = false, targetEntity = com.senac.aesthetics.entities.model.Servico.class)
    @JoinColumn(name = "ID_SERVICO_FK", referencedColumnName = "ID_SERVICO", nullable = false)
    @NotNull(message = "O Agendamento Não Pode Ser Feito Sem Serviço!")
    private Servico servico;

}
