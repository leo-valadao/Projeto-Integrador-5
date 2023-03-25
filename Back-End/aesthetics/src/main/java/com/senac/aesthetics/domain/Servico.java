package com.senac.aesthetics.domain;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
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
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Lombok:
@Getter
@Setter
@NoArgsConstructor

// JSON:
@JsonIdentityInfo(scope = Servico.class, generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")

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
    @NotBlank(message = "O Nome do Serviço Não Pode Estar Vazio!")
    @Size(max = 50, message = "O Tamanho Máximo da Nome do Serviço é de 50 Caracteres!")
    private String nome;

    @Column(name = "DESCRICAO", length = 150, nullable = true)
    @Size(max = 150, message = "O Tamanho Máximo da Descrição do Serviço é de 150 Caracteres!")
    private String descricao;

    @Column(name = "VALOR", scale = 2, nullable = false)
    @NotNull(message = "O Valor do Serviço Não Pode Estar Vazio!")
    @PositiveOrZero(message = "O Valor do Serviço Não Pode Ser Negativo!")
    private Double valor;

    // Relacionamentos:
    @JsonProperty(access = JsonProperty.Access.READ_WRITE)
    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "servicosDisponiveis", targetEntity = com.senac.aesthetics.domain.Profissional.class)
    private Set<Profissional> profissionais;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "servico", targetEntity = com.senac.aesthetics.domain.Agendamento.class)
    private Set<Agendamento> agendamentos;

}
