package com.flamme.flammebackend.repository;

import com.flamme.flammebackend.entities.Orders;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderRepository extends JpaRepository<Orders, Long> {
}
