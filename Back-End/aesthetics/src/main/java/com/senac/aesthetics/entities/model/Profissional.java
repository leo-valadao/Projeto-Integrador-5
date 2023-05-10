package com.senac.aesthetics.entities.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
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

    @Column(name = "INSTAGRAM", length = 30)
    private String instagram;

    // Relacionamentos:
    @JsonIgnoreProperties("profissionaisDisponiveis")
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "profissionaisDisponiveis", targetEntity = com.senac.aesthetics.entities.model.Servico.class)
    private List<Servico> servicosDisponiveis;

}
    