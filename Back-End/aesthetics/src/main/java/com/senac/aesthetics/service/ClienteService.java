package com.senac.aesthetics.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.senac.aesthetics.entities.model.Cliente;
import com.senac.aesthetics.error.NotFoundExeception;
import com.senac.aesthetics.repository.ClienteRepository;

@Service
public class ClienteService {

    // Objetos:
    @Autowired
    private ClienteRepository clienteRepository;

    // Métodos:
    public Page<Cliente> obterTodosClientes(Integer numeroPagina, Integer quantidadePorPagina, String ordenarPor) {
        Pageable pagina = PageRequest.of(numeroPagina, quantidadePorPagina, Sort.by(Sort.Direction.DESC, ordenarPor));

        return clienteRepository.findAll(pagina);
    }

    public Cliente obterClientePorId(Long idCliente) {
        if (clienteRepository.existsById(idCliente)) {
            return clienteRepository.findById(idCliente).get();
        } else {
            throw new NotFoundExeception("Cliente Não Encontrado! ID: " + idCliente);
        }
    }

    public Cliente inserirCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente atualizarCliente(Cliente cliente) {
        if (clienteRepository.existsById(cliente.getId())) {
            return clienteRepository.saveAndFlush(cliente);
        } else {
            throw new NotFoundExeception("Cliente Não Encontrado! ID: " + cliente.getId());
        }
    }

    public void excluirCliente(Long idCliente) {
        if (clienteRepository.existsById(idCliente)) {
            clienteRepository.deleteById(idCliente);
        } else {
            throw new NotFoundExeception("Cliente Não Encontrado! ID: " + idCliente);
        }
    }
}
