package com.senac.aesthetics.error;

import com.senac.aesthetics.entities.enumerables.TipoMensagemEnum;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class AestheticsExeception extends RuntimeException {

    // Atributos:
    private TipoMensagemEnum tipo;
    private String mensagem;
}
