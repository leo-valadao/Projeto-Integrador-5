package com.senac.aesthetics.domain;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Lombok:
@Getter
@Setter
@NoArgsConstructor

// JPA:
@MappedSuperclass
public abstract class Pessoa {

    // Atributos:
    @Column(name = "NOME", length = 50, nullable = false)
    private String nome;

    @Column(name = "CPF", length = 11, nullable = true)
    private String cpf;

    @Column(name = "ENDERECO", length = 150, nullable = true)
    private String endereco;

    @Column(name = "TELEFONE_FIXO", length = 11, nullable = true)
    private String telefoneFixo;

    @Column(name = "TELEFONE_CELULAR", length = 11, nullable = false)
    private String telefoneCelular;

    @Column(name = "EMAIL", length = 50, nullable = true)
    private String email;

}
