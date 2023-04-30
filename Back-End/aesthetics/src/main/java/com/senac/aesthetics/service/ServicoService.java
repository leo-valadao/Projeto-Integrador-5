package com.senac.aesthetics.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.senac.aesthetics.entities.enumerables.TipoMensagemEnum;
import com.senac.aesthetics.entities.model.Servico;
import com.senac.aesthetics.error.AestheticsExeception;
import com.senac.aesthetics.repository.ServicoRepository;

@Service
public class ServicoService {

    // Objetos:
    @Autowired
    private ServicoRepository servicoRepository;

    // Métodos:
    public Page<Servico> obterTodosServicos(Integer numeroPagina, Integer quantidadePorPagina, String ordenarPor) {
        Pageable pagina = PageRequest.of(numeroPagina, quantidadePorPagina, Sort.by(Sort.Direction.DESC, ordenarPor));

        return servicoRepository.findAll(pagina);
    }

    public Servico obterServicoPorId(Long idServico) {
        Optional<Servico> servico = servicoRepository.findById(idServico);

        if (servico.isPresent()) {
            return servico.get();
        } else {
            throw new AestheticsExeception(TipoMensagemEnum.ERROR, "Serviço Não Encontrado! ID: " + idServico);
        }
    }

    public Servico inserirServico(Servico servico) {
        if (!servicoRepository.existePorNome(servico.getNome())) {
            return servicoRepository.save(servico);
        } else {
            throw new AestheticsExeception(TipoMensagemEnum.ERROR, "Serviço Já Existe! Nome: " + servico.getNome());
        }
    }

    public Servico atualizarServico(Servico servico) {
        if (servicoRepository.existsById(servico.getId())) {
            return servicoRepository.saveAndFlush(servico);
        } else {
            throw new AestheticsExeception(TipoMensagemEnum.ERROR, "Serviço Não Encontrado! ID: " + servico.getId());
        }
    }

    public void excluirServico(Long idServico) {
        if (servicoRepository.existsById(idServico)) {
            servicoRepository.deleteById(idServico);
        } else {
            throw new AestheticsExeception(TipoMensagemEnum.ERROR, "Serviço Não Encontrado! ID: " + idServico);
        }
    }
}
