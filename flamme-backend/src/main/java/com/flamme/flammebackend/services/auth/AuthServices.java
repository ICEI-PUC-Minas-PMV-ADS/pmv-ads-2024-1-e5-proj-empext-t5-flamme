package com.flamme.flammebackend.services.auth;

import javax.naming.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.flamme.flammebackend.dto.AuthCompanyResponseDTO;
import com.flamme.flammebackend.dto.AuthRequestDTO;
import com.flamme.flammebackend.repository.UserRepository;

@Service
public class AuthServices {

    @Value("${security.token.secret}")
    private String secretKey;

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public AuthCompanyResponseDTO execute(AuthRequestDTO authCompanyDTO) throws AuthenticationException {

        var user = this.repository.findByEmail(authCompanyDTO.email()).orElseThrow(
                () -> {
                    throw new UsernameNotFoundException("Username/password incorrect.");
                });

        var passwordMatches = this.passwordEncoder.matches(authCompanyDTO.password(), user.getPassword());

        if (!passwordMatches)
            throw new AuthenticationException();

        Algorithm algorithm = Algorithm.HMAC256(secretKey);

        var token = JWT.create()
                .withIssuer("flamme")
                .withSubject(user.getId().toString())
                .sign(algorithm);

        var authCompanyResponseDTO = AuthCompanyResponseDTO.builder()
                .access_token(token)
                .userId(user.getId())
                .build();

        return authCompanyResponseDTO;
    }
}
