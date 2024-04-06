package com.flamme.flammebackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flamme.flammebackend.entities.Candles;
import com.flamme.flammebackend.entities.User;
import com.flamme.flammebackend.services.create.CandlesService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users/candles")
public class CandlesController {

    @Autowired
    private CandlesService service;

    // GET
    @GetMapping
    public ResponseEntity<List<Candles>> findAll() {
        List<Candles> list = service.findAll();

        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Candles> findById(@PathVariable Long id) {
        Candles Candles = service.findById(id);

        return ResponseEntity.ok().body(Candles);
    }

    // POST
    @PostMapping("/{id}")
    public ResponseEntity<Object> create(@Valid @RequestBody Candles candle, @PathVariable Long id) {
        try {
            Candles result = this.service.create(candle, id);

            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // PUT
    @PatchMapping("update")
    public ResponseEntity<Object> update(@Valid @RequestBody Candles candle) {
        try {
            Candles result = this.service.update(candle);

            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    //DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@Valid @RequestBody @PathVariable Long id) {
        try {
            String result = this.service.delete(id);

            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
