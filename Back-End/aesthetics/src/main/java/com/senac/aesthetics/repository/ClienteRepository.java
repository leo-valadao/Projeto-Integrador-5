package com.senac.aesthetics.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.senac.aesthetics.domain.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    
    @Query("SELECT DISTINCT c FROM Cliente c")
    Page<Cliente> obterTodosClientes(Pageable pagina);
}
