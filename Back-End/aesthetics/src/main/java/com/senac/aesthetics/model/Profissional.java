package com.senac.aesthetics.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

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

// JSON:
@JsonIdentityInfo(scope = Profissional.class, generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")

// JPA:
@Entity(name = "Profissional")
@Table(name = "PROFISSIONAIS")
public class Profissional extends Pessoa {

    // Atributos:
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PROFISSIONAL", nullable = false)
    private Long id;

    @Column(name = "INSTAGRAM", length = 30)
    private String instagram;

    // Relacionamentos:
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "profissionais", targetEntity = com.senac.aesthetics.model.Servico.class)
    private Set<Servico> servicosDisponiveis;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "profissional", targetEntity = com.senac.aesthetics.model.Agendamento.class)
    private Set<Agendamento> agendamentosRealizados;

}