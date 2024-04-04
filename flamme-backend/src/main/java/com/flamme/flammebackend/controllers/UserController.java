package com.flamme.flammebackend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flamme.flammebackend.entities.User;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public ResponseEntity<User> findAll() {
        User u = new User("Flamme", "flammevelas95@gmail.com", "MarinaRabelo!1995", "");
        return ResponseEntity.ok().body(u);
    }
}
