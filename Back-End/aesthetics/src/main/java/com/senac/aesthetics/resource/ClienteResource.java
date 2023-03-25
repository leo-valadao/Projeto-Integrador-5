package com.senac.aesthetics.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.senac.aesthetics.domain.Cliente;
import com.senac.aesthetics.service.ClienteService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/v1/cliente")
public class ClienteResource {

    // Objetos:
    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public ResponseEntity<Page<Cliente>> obterTodosClientes(@RequestParam(name = "numeroPagina", defaultValue = "0") Integer numeroPagina,
                                                            @RequestParam(name = "quantidadePorPagina", defaultValue = "25") Integer quantidadePorPagina,
                                                            @RequestParam(name = "ordenarPor", defaultValue = "id") String ordernarPor) {
        return ResponseEntity.ok().body(clienteService.obterTodosClientes(numeroPagina, quantidadePorPagina, ordernarPor));
    }

    @PostMapping
    public ResponseEntity<Cliente> inserirCliente(@RequestBody @Valid Cliente cliente) {
        return ResponseEntity.ok().body(clienteService.inserirCliente(cliente));
    }
}
