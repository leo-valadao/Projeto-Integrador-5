package com.senac.aesthetics.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.senac.aesthetics.entities.model.Servico;
import com.senac.aesthetics.service.ServicoService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "api/v1/servico", produces = "application/json")
public class ServicoResource {

    // Objetos:
    @Autowired
    private ServicoService servicoService;

    // API's:
    @GetMapping
    public ResponseEntity<Page<Servico>> obterTodosServicos(
            @RequestParam(name = "numeroPagina", defaultValue = "0") Integer numeroPagina,
            @RequestParam(name = "quantidadePorPagina", defaultValue = "25") Integer quantidadePorPagina,
            @RequestParam(name = "ordenarPor", defaultValue = "id") String ordernarPor) {
        Page<Servico> servicos = servicoService.obterTodosServicos(numeroPagina, quantidadePorPagina, ordernarPor);

        return ResponseEntity.ok(servicos);
    }

    @GetMapping(params = "id")
    public ResponseEntity<Servico> obterServicoPorId(@RequestParam(name = "id") Long id) {
        Servico servico = servicoService.obterServicoPorId(id);

        return ResponseEntity.ok(servico);
    }

    @PostMapping
    public ResponseEntity<Servico> inserirServico(@RequestBody @Valid Servico servico) {
        Servico servicoInserido = servicoService.inserirServico(servico);

        return ResponseEntity.created(null).body(servicoInserido);
    }

    @PutMapping
    public ResponseEntity<Servico> atualizarServico(@RequestBody @Valid Servico servico) {
        Servico servicoAtualizado = servicoService.atualizarServico(servico);

        return ResponseEntity.ok(servicoAtualizado);
    }

    @DeleteMapping(params = "id")
    public ResponseEntity<Void> excluirServico(@RequestParam(name = "id") Long id) {
        servicoService.excluirServico(id);

        return ResponseEntity.noContent().build();
    }
}
