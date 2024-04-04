package com.flamme.flammebackend.services.create;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.flamme.flammebackend.entities.User;
import com.flamme.flammebackend.exceptions.UserException;
import com.flamme.flammebackend.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> findAll() {
        return repository.findAll();
    }

    public User findById(Long id) {
        Optional<User> obj = repository.findById(id);
        return obj.get();
    }

    public User create(User user) {

        this.repository.findByEmail(user.getEmail())
                .ifPresent((company) -> {
                    throw new UserException();
                });

        var password = passwordEncoder.encode(user.getPassword());
        user.setPassword(password);

        return this.repository.save(user);

    }
}
