package com.senac.aesthetics.entities.enumerables;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum TipoMensagemEnum {

    SUCESS("sucess"),
    INFO("info"),
    WARN("warn"),
    ERROR("error");

    private String tipo;
}
