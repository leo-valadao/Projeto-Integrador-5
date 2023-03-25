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
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Lombok:
@Getter
@Setter
@NoArgsConstructor

// JPA:
@Entity(name = "Servico")
@Table(name = "SERVICOS")
public class Servico {

    // Atributos:
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_SERVICO", nullable = false)
    private Long id;

    @Column(name = "NOME", length = 50, nullable = false)
    private String nome;

    @Column(name = "DESCRICAO", length = 150, nullable = true)
    private String descricao;

    @Column(name = "VALOR", scale = 2, nullable = false)
    private Double valor;

    // Relacionamentos:
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToMany(fetch = FetchType.LAZY, targetEntity = com.senac.aesthetics.domain.Profissional.class)
    private Set<Profissional> profissionais;

}
