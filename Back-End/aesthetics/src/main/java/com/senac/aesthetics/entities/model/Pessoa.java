package com.senac.aesthetics.entities.model;

import com.senac.aesthetics.entities.anotations.CPF;
import com.senac.aesthetics.entities.anotations.Telefone;

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

    @Column(name = "CPF", length = 14, nullable = false, unique = true)
    @CPF(message = "O CPF da Pessoas Está Inválido!")
    private String cpf;

    @Column(name = "ENDERECO", length = 150)
    @Size(max = 150, message = "O Tamanho Máximo do Endereço da Pessoa é de 150 Caracteres!")
    private String endereco;

    @Column(name = "TELEFONE_FIXO", length = 14)
    @Size(max = 14, message = "O Tamanho Máximo do Telefone Fixo da Pessoa é de 11 Caracteres!")
    @Telefone(message = "O Telefone Fixo da Pessoa Está Inválido!")
    private String telefoneFixo;

    @Column(name = "TELEFONE_CELULAR", length = 14, nullable = false)
    @NotBlank(message = "O Telefone Celular da Pessoa Não Pode Estar Vazio!")
    @Size(max = 14, message = "O Tamanho Máximo do Telefone Celular da Pessoa é de 11 Caracteres!")
    @Telefone(message = "O Telefone Fixo da Pessoa Está Inválido!")
    private String telefoneCelular;

    @Column(name = "EMAIL", length = 50)
    @Email(message = "O E-Mail da Pessoa Está Inválido!")
    private String email;

}
