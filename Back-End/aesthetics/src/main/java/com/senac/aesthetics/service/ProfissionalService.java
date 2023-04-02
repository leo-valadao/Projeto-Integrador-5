package com.senac.aesthetics.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.senac.aesthetics.error.NotFoundExeception;
import com.senac.aesthetics.model.Profissional;
import com.senac.aesthetics.repository.ProfissionalRepository;

@Service
public class ProfissionalService {

    // Obejtos:
    @Autowired
    private ProfissionalRepository profissionalRepository;

    // Métodos:
    public Page<Profissional> obterTodosProfissionais(Integer numeroPagina, Integer quantidadePorPagina,
            String ordenarPor) {
        Pageable pagina = PageRequest.of(numeroPagina, quantidadePorPagina, Sort.by(ordenarPor));

        return profissionalRepository.findAll(pagina);
    }

    public Profissional obterProfissionalPorId(Long idProfissional) {
        if (profissionalRepository.existsById(idProfissional)) {
            return profissionalRepository.findById(idProfissional).get();
        } else {
            throw new NotFoundExeception("Profissional Não Encontrado! ID: " + idProfissional);
        }
    }

    public Profissional inserirProfissional(Profissional profissional) {
        return profissionalRepository.save(profissional);
    }

    public Profissional atualizarProfissional(Profissional profissional) {
        if (profissionalRepository.existsById(profissional.getId())) {
            return profissionalRepository.saveAndFlush(profissional);
        } else {
            throw new NotFoundExeception("Profissional Não Encontrado! ID: " + profissional.getId());
        }
    }

    public void excluirProfissional(Long idProfissional) {
        if (profissionalRepository.existsById(idProfissional)) {
            profissionalRepository.deleteById(idProfissional);
        } else {
            throw new NotFoundExeception("Profissional Não Encontrado! ID: " + idProfissional);
        }
    }
}
