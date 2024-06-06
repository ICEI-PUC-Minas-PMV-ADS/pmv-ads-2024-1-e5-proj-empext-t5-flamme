package com.flamme.flammebackend.services.create;

import java.util.Optional;

import com.flamme.flammebackend.entities.User;
import com.flamme.flammebackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flamme.flammebackend.entities.Orders;
import com.flamme.flammebackend.repository.OrderRepository;

@Service
public class OrderService {

    @Autowired
    OrderRepository repository;

    @Autowired
    UserRepository userRepository;

    public Optional<Orders> findById(Long id) {
        return repository.findById(id);
    }

    public Orders create(Orders orders, Long id) {
         Optional<User> user = userRepository.findById(id);

         var username = user.get();
         orders.setClientName(username.getName());

        return this.repository.save(orders);
    }
}
