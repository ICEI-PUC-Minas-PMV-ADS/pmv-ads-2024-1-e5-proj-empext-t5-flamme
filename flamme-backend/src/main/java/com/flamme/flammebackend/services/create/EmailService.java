package com.flamme.flammebackend.services.create;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public void sendHtmlMessage(String to, String subject, String htmlBody) throws MessagingException {
        /*
         * MimeMessage message = emailSender.createMimeMessage();
         * MimeMessageHelper helper = new MimeMessageHelper(message, true);
         * helper.setTo(to);
         * helper.setSubject(subject);
         * helper.setText(htmlBody, true);
         * emailSender.send(message);
         */
    }
}
