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

import com.senac.aesthetics.model.Cliente;
import com.senac.aesthetics.service.ClienteService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/v1/cliente")
public class ClienteResource {

    // Objetos:
    @Autowired
    private ClienteService clienteService;

    // API's:
    @GetMapping
    public ResponseEntity<Page<Cliente>> obterTodosClientes(
            @RequestParam(name = "numeroPagina", defaultValue = "0") Integer numeroPagina,
            @RequestParam(name = "quantidadePorPagina", defaultValue = "25") Integer quantidadePorPagina,
            @RequestParam(name = "ordenarPor", defaultValue = "id") String ordernarPor) {
        Page<Cliente> clientes = clienteService.obterTodosClientes(numeroPagina, quantidadePorPagina, ordernarPor);

        return ResponseEntity.ok(clientes);
    }

    @GetMapping(params = "id")
    public ResponseEntity<Cliente> obterClientePorId(@RequestParam(name = "id") Long id) {
        Cliente cliente = clienteService.obterClientePorId(id);

        return ResponseEntity.ok(cliente);
    }

    @PostMapping
    public ResponseEntity<Cliente> inserirCliente(@RequestBody @Valid Cliente cliente) {
        Cliente clienteInserido = clienteService.inserirCliente(cliente);

        return ResponseEntity.created(null).body(clienteInserido);
    }

    @PutMapping
    public ResponseEntity<Cliente> atualizarCliente(@RequestBody @Valid Cliente cliente) {
        Cliente clienteAtualizado = clienteService.atualizarCliente(cliente);

        return ResponseEntity.ok(clienteAtualizado);
    }

    @DeleteMapping(params = "id")
    public ResponseEntity<Void> excluirCliente(@RequestParam(name = "id") Long id) {
        clienteService.excluirCliente(id);

        return ResponseEntity.noContent().build();
    }
}
