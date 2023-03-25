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

import com.senac.aesthetics.domain.Agendamento;
import com.senac.aesthetics.service.AgendamentoService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/v1/agendamento")
public class AgendamentoResource {

    // Obejtos:
    @Autowired
    private AgendamentoService agendamentoService;

    // API's:
    @GetMapping
    public ResponseEntity<Page<Agendamento>> obterTodosAgendamentos(
            @RequestParam(name = "numeroPagina", defaultValue = "0") Integer numeroPagina,
            @RequestParam(name = "quantidadePorPagina", defaultValue = "25") Integer quantidadePorPagina,
            @RequestParam(name = "ordenarPor", defaultValue = "id") String ordernarPor) {
        Page<Agendamento> agendamentos = agendamentoService.obterTodosAgendamentos(numeroPagina, quantidadePorPagina,
                ordernarPor);

        return ResponseEntity.ok(agendamentos);
    }

    @GetMapping(params = "id")
    public ResponseEntity<Agendamento> obterAgendamentoPorId(@RequestParam(name = "id") Long id) {
        Agendamento agendamento = agendamentoService.obterAgendamentoPorId(id);

        return ResponseEntity.ok(agendamento);
    }

    @PostMapping
    public ResponseEntity<Agendamento> inserirAgendamento(@RequestBody @Valid Agendamento agendamento) {
        Agendamento agendamentoInserido = agendamentoService.inserirAgendamento(agendamento);

        return ResponseEntity.created(null).body(agendamentoInserido);
    }

    @PutMapping
    public ResponseEntity<Agendamento> atualizarAgendamento(@RequestBody @Valid Agendamento agendamento) {
        Agendamento agendamentoAtualizado = agendamentoService.atualizarAgendamento(agendamento);

        return ResponseEntity.ok(agendamentoAtualizado);
    }

    @DeleteMapping(params = "id")
    public ResponseEntity<Void> excluirAgendamento(@RequestParam(name = "id") Long id) {
        agendamentoService.excluirAgendamento(id);

        return ResponseEntity.noContent().build();
    }
}
