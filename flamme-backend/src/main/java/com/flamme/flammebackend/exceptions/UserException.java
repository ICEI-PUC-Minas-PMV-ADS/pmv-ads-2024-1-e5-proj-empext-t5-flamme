package com.flamme.flammebackend.exceptions;

public class UserException extends RuntimeException {
    public UserException() {
        super("Usuário/Email já cadastrado.");
    }
}
