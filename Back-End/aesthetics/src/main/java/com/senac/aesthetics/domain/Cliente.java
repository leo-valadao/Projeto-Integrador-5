package com.senac.aesthetics.domain;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Entity(name = "Cliente")
@Table(name = "CLIENTES")
public class Cliente extends Pessoa {

    // Atributos:
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CLIENTE", nullable = false)
    private Long id;

    // Relacionamentos:
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "cliente",
        targetEntity = com.senac.aesthetics.domain.Agendamento.class)
    private Set<Agendamento> agendamentosRealizados;

}
