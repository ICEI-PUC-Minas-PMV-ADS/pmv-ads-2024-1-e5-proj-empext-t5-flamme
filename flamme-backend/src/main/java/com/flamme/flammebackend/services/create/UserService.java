package com.flamme.flammebackend.services.create;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.flamme.flammebackend.entities.Candles;
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

    public User update(User users) {
        this.repository.findByEmail(users.getEmail())
                .ifPresent((company) -> {
                    throw new UserException();
                });

        Optional<User> user = repository.findById(users.getId());

        User newUsers = user.get();
        newUsers.setName(users.getName());
        newUsers.setPhone(users.getPhone());
        newUsers.setEmail(users.getEmail());
        var password = passwordEncoder.encode(users.getPassword());
        newUsers.setPassword(password);

        return this.repository.save(newUsers);
    }

    public String delete(Long id) {
        this.repository.deleteById(id);
        return "Usuário deletado!";
    }
}
