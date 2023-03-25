package com.senac.aesthetics.domain;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Lombok:
@Getter
@Setter
@NoArgsConstructor

// JPA:
@Entity(name = "Profissional")
@Table(name = "PROFISSIONAIS")
public class Profissional extends Pessoa {

    // Atributos:
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PROFISSIONAL", nullable = false)
    private Long id;

    // Relacionamentos:
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "profissionais", targetEntity = com.senac.aesthetics.domain.Servico.class)
    private Set<Servico> servicosDisponiveis;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "profissional", targetEntity = com.senac.aesthetics.domain.Agendamento.class)
    private Set<Agendamento> agendamentosRealizados;

}
