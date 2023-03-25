package com.senac.aesthetics.domain;

import java.time.LocalDateTime;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
    private LocalDateTime agendamentoDataHora;

    @Column(name = "DURACAO", columnDefinition = "TIME", nullable = false)
    private LocalTime duracao;

    @Column(name = "FINALIZACAO_AGENDAMENTO", columnDefinition = "TIMESTAMP", nullable = false)
    private LocalDateTime finalizacaoAgendamento;

    // Relacionamentos:
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    @ManyToOne(fetch = FetchType.LAZY, optional = false, targetEntity = com.senac.aesthetics.domain.Cliente.class)
    private Cliente cliente;

    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    @ManyToOne(fetch = FetchType.LAZY, optional = false, targetEntity = com.senac.aesthetics.domain.Profissional.class)
    private Profissional profissional;

}
