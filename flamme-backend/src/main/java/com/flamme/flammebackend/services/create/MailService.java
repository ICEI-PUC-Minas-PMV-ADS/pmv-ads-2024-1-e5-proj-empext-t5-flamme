package com.flamme.flammebackend.services.create;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.events.Event.ID;

import com.flamme.flammebackend.entities.User;
import com.flamme.flammebackend.exceptions.UserException;
import com.flamme.flammebackend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private UserRepository repository;

    public User findById(Long id) {
        Optional<User> obj = repository.findById(id);
        return obj.get();
    }

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);
    }

    public User updatePassUser(User users, String password) {

        this.repository.findByEmail(users.getEmail())
                .ifPresent((company) -> {
                    throw new UserException();
                });

        Optional<User> user = repository.findById(users.getId());

        User newUsers = user.get();
        newUsers.setName(users.getName());
        newUsers.setPhone(users.getPhone());
        newUsers.setEmail(users.getEmail());

        newUsers.setPassword(password);

        // var password = passwordEncoder.encode(password);
        // user.setPassword(password);

        return this.repository.save(newUsers);

    }

}
