package com.flamme.flammebackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flamme.flammebackend.entities.Candles;
import com.flamme.flammebackend.entities.User;

public interface CandlesRepository extends JpaRepository<Candles, Long> {
    Optional<User> findByUserIdAndName(Long userId, String name);
}
