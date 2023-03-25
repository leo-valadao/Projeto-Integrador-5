package com.senac.aesthetics.domain;

import java.util.Set;

public class Servico {

    // Atributos:
    private String nome;
    private String descricao;
    private Double valor;

    // Relacionamentos:
    private Set<Profissional> profissionais;

}
