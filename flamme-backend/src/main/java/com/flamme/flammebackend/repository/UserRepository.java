package com.flamme.flammebackend.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flamme.flammebackend.entities.User;

public interface UserRepository extends JpaRepository<User, UUID> {
    
}
