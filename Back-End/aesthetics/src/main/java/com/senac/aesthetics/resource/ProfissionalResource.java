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

import com.senac.aesthetics.model.Profissional;
import com.senac.aesthetics.service.ProfissionalService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/v1/profissional")
public class ProfissionalResource {

    // Objetos:
    @Autowired
    private ProfissionalService profissionalService;

    // API's:
    @GetMapping
    public ResponseEntity<Page<Profissional>> obterTodosProfissionais(
            @RequestParam(name = "numeroPagina", defaultValue = "0") Integer numeroPagina,
            @RequestParam(name = "quantidadePorPagina", defaultValue = "25") Integer quantidadePorPagina,
            @RequestParam(name = "ordenarPor", defaultValue = "id") String ordenarPor) {
        Page<Profissional> profissionais = profissionalService.obterTodosProfissionais(numeroPagina,
                quantidadePorPagina, ordenarPor);

        return ResponseEntity.ok(profissionais);
    }

    @GetMapping(params = "id")
    public ResponseEntity<Profissional> obterProfissionalPorId(@RequestParam(name = "id") Long id) {
        Profissional profissional = profissionalService.obterProfissionalPorId(id);

        return ResponseEntity.ok(profissional);
    }

    @PostMapping
    public ResponseEntity<Profissional> inserirProfissional(@RequestBody @Valid Profissional profissional) {
        Profissional profissionalInserido = profissionalService.inserirProfissional(profissional);

        return ResponseEntity.created(null).body(profissionalInserido);
    }

    @PutMapping
    public ResponseEntity<Profissional> atualizarProfissional(@RequestBody @Valid Profissional profissional) {
        Profissional profissionalAtualizado = profissionalService.atualizarProfissional(profissional);

        return ResponseEntity.ok(profissionalAtualizado);
    }

    @DeleteMapping(params = "id")
    public ResponseEntity<Void> excluirProfissional(@RequestParam(name = "id") Long id) {
        profissionalService.excluirProfissional(id);

        return ResponseEntity.noContent().build();
    }
}
