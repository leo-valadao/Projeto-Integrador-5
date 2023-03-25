package com.senac.aesthetics.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senac.aesthetics.domain.Profissional;

@Repository
public interface ProfissionalRepository extends JpaRepository<Profissional, Long> {
    
}