package com.senac.aesthetics.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.senac.aesthetics.domain.Cliente;
import com.senac.aesthetics.repository.ClienteRepository;

@Service
public class ClienteService {
    
    // Objetos:
    @Autowired
    private ClienteRepository clienteRepository;

    // Métodos:
    public Page<Cliente> obterTodosClientes(Integer numeroPagina, 
                                            Integer quantidadePorPagina,
                                            String ordenarPor) {
        Pageable pagina = PageRequest.of(numeroPagina, quantidadePorPagina, Sort.by(ordenarPor));

        return clienteRepository.obterTodosClientes(pagina);
    }

    public Cliente inserirCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }
}
