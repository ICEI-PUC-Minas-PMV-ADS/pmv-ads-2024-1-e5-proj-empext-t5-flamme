package com.flamme.flammebackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flamme.flammebackend.dto.AuthRequestDTO;
import com.flamme.flammebackend.services.auth.AuthServices;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthServices services;

    @PostMapping
    public ResponseEntity<Object> auth(@RequestBody AuthRequestDTO authUserDTO) {
        try {
            var token = this.services.execute(authUserDTO);
            return ResponseEntity.ok().body(token);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
