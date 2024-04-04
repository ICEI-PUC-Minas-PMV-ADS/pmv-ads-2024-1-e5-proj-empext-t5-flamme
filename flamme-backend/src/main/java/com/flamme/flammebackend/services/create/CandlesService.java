package com.flamme.flammebackend.services.create;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.flamme.flammebackend.entities.Candles;
import com.flamme.flammebackend.exceptions.UserException;
import com.flamme.flammebackend.repository.CandlesRepository;

@Service
public class CandlesService {

    @Autowired
    private CandlesRepository repository;

    public List<Candles> findAll() {
        return repository.findAll();
    }

    public Candles findById(Long id) {
        Optional<Candles> candle = repository.findById(id);

        return candle.get();
    }

    public Candles create(Candles candles, Long id) {
        candles.setUserId(id);
        return this.repository.save(candles);
    }
}
