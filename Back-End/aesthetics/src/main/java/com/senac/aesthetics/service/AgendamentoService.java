package com.senac.aesthetics.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.senac.aesthetics.domain.Agendamento;
import com.senac.aesthetics.repository.AgendamentoRepository;

@Service
public class AgendamentoService {
    
    // Objetos:
    @Autowired
    private AgendamentoRepository agendamentoRepository;

    // Métodos:
    public Page<Agendamento> obterTodosAgendamentos(Pageable pagina) {
        return agendamentoRepository.obterTodosAgendamentos(pagina);
    }
}
