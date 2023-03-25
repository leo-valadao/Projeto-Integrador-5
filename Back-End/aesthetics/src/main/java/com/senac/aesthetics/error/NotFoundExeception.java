package com.senac.aesthetics.error;

public class NotFoundExeception extends RuntimeException {
    
    // Atributos:
    private String message;

    // Construtores:
    public NotFoundExeception(String message) {
        super(message);
        this.setMessage(message);
    }

    // Métodos:
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
