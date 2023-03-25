package com.senac.aesthetics.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.senac.aesthetics.domain.Agendamento;

@Repository
public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    
    @Query("SELECT DISTINCT a FROM Agendamento a")
    Page<Agendamento> obterTodosAgendamentos(Pageable pagina);

}
