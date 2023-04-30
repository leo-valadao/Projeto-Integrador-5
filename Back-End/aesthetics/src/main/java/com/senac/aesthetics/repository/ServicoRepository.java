package com.senac.aesthetics.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.senac.aesthetics.entities.model.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Long> {

    // Verificações
    @Query("SELECT COUNT(*) > 0 FROM Servico s WHERE s.nome = :nome")
    public Boolean existePorNome(String nome);

    // Pesquisas
    @Query("FROM Servico s WHERE " +
            " (:filtro.id IS NULL OR s.id = :filtro.id) AND " +
            " (:filtro.nome IS NULL OR s.nome LIKE '%:filtro.nome%') AND " +
            " (:filtro.descricao IS NULL OR s.descricao LIKE '%:filtro.descricao%') AND " +
            " (:filtro.valor IS NULL OR s.valor = :filtro.valor) AND " +
            " (:menorValor IS NULL OR :filtro.menorValor <= s.valor) AND " +
            " (:maiorValor IS NULL OR :filtro.maiorValor >= s.valor) AND " +
            " (:filtro.profissionaisDisponiveis IS EMPTY OR s.profissionaisDisponiveis IN (:filtro.profissionaisDisponiveis))")
    public Servico obterPorFiltro(Servico filtro);

}
