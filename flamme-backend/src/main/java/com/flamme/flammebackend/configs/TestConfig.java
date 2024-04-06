package com.flamme.flammebackend.configs;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.flamme.flammebackend.entities.User;
import com.flamme.flammebackend.repository.UserRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        User u1 = new User("Maria Brown", "maria@gmail.com", "12345678", "71988888888");
        User u2 = new User("Alex Green", "alex@gmail.com", "123456789", "71988888888");
        userRepository.saveAll(Arrays.asList(u1, u2));
    }

}