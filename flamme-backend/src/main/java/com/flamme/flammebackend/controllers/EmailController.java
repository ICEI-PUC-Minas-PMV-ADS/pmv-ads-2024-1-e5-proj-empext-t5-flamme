package com.flamme.flammebackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.flamme.flammebackend.services.create.EmailService;
import com.flamme.flammebackend.services.create.MailService;

import javax.mail.MessagingException;

@RestController
public class EmailController {

    @Autowired
    private MailService emailService;

    @GetMapping("/sendEmail")
    public String sendEmail(@RequestParam String to, @RequestParam String subject, @RequestParam String text) {
        // emailService.sendSimpleMessage(to, subject, text);
        emailService.sendEmail(to, subject, text);
        return "Email enviado com sucesso!";
    }
}
