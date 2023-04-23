package com.senac.aesthetics.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.senac.aesthetics.entities.model.Agendamento;
import com.senac.aesthetics.error.NotFoundExeception;
import com.senac.aesthetics.repository.AgendamentoRepository;

@Service
public class AgendamentoService {

    // Objetos:
    @Autowired
    private AgendamentoRepository agendamentoRepository;

    // Métodos:
    public Page<Agendamento> obterTodosAgendamentos(Integer numeroPagina, Integer quantidadePorPagina,
            String ordenarPor) {
        Pageable pagina = PageRequest.of(numeroPagina, quantidadePorPagina, Sort.by(Sort.Direction.DESC, ordenarPor));

        return agendamentoRepository.findAll(pagina);
    }

    public Agendamento obterAgendamentoPorId(Long idAgendamento) {
        if (agendamentoRepository.existsById(idAgendamento)) {
            return agendamentoRepository.findById(idAgendamento).get();
        } else {
            throw new NotFoundExeception("Agendamento Não Encontrado! ID: " + idAgendamento);
        }
    }

    public Agendamento inserirAgendamento(Agendamento agendamento) {
        return agendamentoRepository.save(agendamento);
    }

    public Agendamento atualizarAgendamento(Agendamento agendamento) {
        if (agendamentoRepository.existsById(agendamento.getId())) {
            return agendamentoRepository.saveAndFlush(agendamento);
        } else {
            throw new NotFoundExeception("Agendamento Não Encontrado! ID: " + agendamento.getId());
        }
    }

    public void excluirAgendamento(Long idAgendamento) {
        if (agendamentoRepository.existsById(idAgendamento)) {
            agendamentoRepository.deleteById(idAgendamento);
        } else {
            throw new NotFoundExeception("Agendamento Não Encontrado! ID: " + idAgendamento);
        }
    }
}
