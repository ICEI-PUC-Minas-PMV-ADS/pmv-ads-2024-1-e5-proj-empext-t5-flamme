package com.flamme.flammebackend.services.create;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flamme.flammebackend.entities.Candles;
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

    public Candles update(Candles candles) {
        Optional<Candles> candle = repository.findById(candles.getId());
        Candles newCandle = candle.get();
        newCandle.setName(candles.getName());
        newCandle.setDescription(candles.getDescription());
        newCandle.setPhone(candles.getPhone());
        newCandle.setAroma(candles.getAroma());
        newCandle.setModel(candles.getModel());
        newCandle.setPrice(candles.getPrice());
        newCandle.setQuantity(candles.getQuantity());
        return this.repository.save(newCandle);
    }

    public String delete(Long id) {
        this.repository.deleteById(id);
        return "Usuário deletado!";
    } 
}
