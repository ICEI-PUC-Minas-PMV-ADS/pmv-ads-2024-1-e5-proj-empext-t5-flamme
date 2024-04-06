package com.flamme.flammebackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flamme.flammebackend.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
