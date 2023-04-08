package com.senac.aesthetics.model;

import java.util.List;

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
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
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

    @Column(name = "DESCRICAO", length = 150)
    @Size(max = 150, message = "O Tamanho Máximo da Descrição do Serviço é de 150 Caracteres!")
    private String descricao;

    @Column(name = "VALOR", scale = 2, nullable = false)
    @NotNull(message = "O Valor do Serviço Não Pode Estar Vazio!")
    @PositiveOrZero(message = "O Valor do Serviço Não Pode Ser Negativo!")
    private Double valor;

    // Relacionamentos:
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToMany(fetch = FetchType.LAZY, targetEntity = com.senac.aesthetics.model.Profissional.class)
    @JoinTable(name = "PROFISSIONAIS_DO_SERVICO", joinColumns = @JoinColumn(name = "ID_PROFISSIONAL_FK"), inverseJoinColumns = @JoinColumn(name = "ID_SERVICO_FK"))
    private List<Profissional> profissionais;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "servico", targetEntity = com.senac.aesthetics.model.Agendamento.class)
    private List<Agendamento> agendamentos;

}
