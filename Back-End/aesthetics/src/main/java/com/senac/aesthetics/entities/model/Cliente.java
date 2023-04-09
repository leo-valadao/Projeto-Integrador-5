package com.senac.aesthetics.entities.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private String alergias;

}
