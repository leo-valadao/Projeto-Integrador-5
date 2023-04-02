package com.senac.aesthetics.model;

import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

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

// JSON:
@JsonIdentityInfo(scope = Cliente.class, generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")

// JPA:
@Entity(name = "Cliente")
@Table(name = "CLIENTES")
public class Cliente extends Pessoa {

    // Atributos:
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CLIENTE", nullable = false)
    private Long id;

    @Column(name = "ALERGIAS", length = 100)
    private List<String> alergias;

    // Relacionamentos:
    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "cliente", targetEntity = com.senac.aesthetics.model.Agendamento.class)
    private Set<Agendamento> agendamentosRealizados;

}
