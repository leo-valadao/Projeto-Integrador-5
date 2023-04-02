package com.senac.aesthetics.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.senac.aesthetics.error.NotFoundExeception;
import com.senac.aesthetics.model.Servico;
import com.senac.aesthetics.repository.ServicoRepository;

@Service
public class ServicoService {

    // Objetos:
    @Autowired
    private ServicoRepository servicoRepository;

    // Métodos:
    public Page<Servico> obterTodosServicos(Integer numeroPagina, Integer quantidadePorPagina, String ordenarPor) {
        Pageable pagina = PageRequest.of(numeroPagina, quantidadePorPagina, Sort.by(ordenarPor));

        return servicoRepository.findAll(pagina);
    }

    public Servico obterServicoPorId(Long idServico) {
        if (servicoRepository.existsById(idServico)) {
            return servicoRepository.findById(idServico).get();
        } else {
            throw new NotFoundExeception("Serviço Não Encontrado! ID: " + idServico);
        }
    }

    public Servico inserirServico(Servico servico) {
        return servicoRepository.save(servico);
    }

    public Servico atualizarServico(Servico servico) {
        if (servicoRepository.existsById(servico.getId())) {
            return servicoRepository.saveAndFlush(servico);
        } else {
            throw new NotFoundExeception("Serviço Não Encontrado! ID: " + servico.getId());
        }
    }

    public void excluirServico(Long idServico) {
        if (servicoRepository.existsById(idServico)) {
            servicoRepository.deleteById(idServico);
        } else {
            throw new NotFoundExeception("Serviço Não Encontrado! ID: " + idServico);
        }
    }
}
