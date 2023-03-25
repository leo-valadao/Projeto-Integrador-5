package com.senac.aesthetics.domain;

import java.time.LocalDateTime;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

// JSON:
@JsonIdentityInfo(scope = Agendamento.class, generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")

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
    @JsonProperty(access = JsonProperty.Access.AUTO)
    @ManyToOne(fetch = FetchType.LAZY, optional = false, targetEntity = com.senac.aesthetics.domain.Cliente.class)
    @NotNull(message = "O Agendamento Não Pode Ser Feito Sem Cliente!")
    private Cliente cliente;

    @JsonProperty(access = JsonProperty.Access.AUTO)
    @ManyToOne(fetch = FetchType.LAZY, optional = false, targetEntity = com.senac.aesthetics.domain.Profissional.class)
    @NotNull(message = "O Agendamento Não Pode Ser Feito Sem Profissional!")
    private Profissional profissional;

    @JsonProperty(access = JsonProperty.Access.AUTO)
    @ManyToOne(fetch = FetchType.LAZY, optional = false, targetEntity = com.senac.aesthetics.domain.Servico.class)
    @NotNull(message = "O Agendamento Não Pode Ser Feito Sem Serviço!")
    private Servico servico;

}
