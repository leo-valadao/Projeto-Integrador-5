package com.senac.aesthetics.domain;

import org.hibernate.validator.constraints.br.CPF;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
    @NotBlank(message = "O Nome da Pessoa Não Pode Estar Vazio!")
    @Size(max = 50, message = "O Tamanho Máximo da Nome da Pessoa é de 50 Caracteres!")
    private String nome;

    @Column(name = "CPF", length = 11, nullable = true)
    @CPF(message = "O CPF da Pessoas Está Inválido!")
    private String cpf;

    @Column(name = "ENDERECO", length = 150, nullable = true)
    @Size(max = 150, message = "O Tamanho Máximo do Endereço da Pessoa é de 150 Caracteres!")
    private String endereco;

    @Column(name = "TELEFONE_FIXO", length = 11, nullable = true)
    @Size(max = 11, message = "O Tamanho Máximo do Telefone Fixo da Pessoa é de 11 Caracteres!")
    // TODO: @TelefoneValidacao
    private String telefoneFixo;

    @Column(name = "TELEFONE_CELULAR", length = 11, nullable = false)
    @NotBlank(message = "O Telefone Celular da Pessoa Não Pode Estar Vazio!")
    @Size(max = 11, message = "O Tamanho Máximo do Telefone Celular da Pessoa é de 11 Caracteres!")
    // TODO: @TelefoneValidacao
    private String telefoneCelular;

    @Column(name = "EMAIL", length = 50, nullable = true)
    @Email(message = "O E-Mail da Pessoa Está Inválido!")
    private String email;

}
