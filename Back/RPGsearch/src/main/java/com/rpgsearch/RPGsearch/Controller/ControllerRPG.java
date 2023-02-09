package com.rpgsearch.RPGsearch.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rpgsearch.RPGsearch.Model.Game;
import com.rpgsearch.RPGsearch.Services.GameService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class ControllerRPG {

    private GameService gameService;

    public ControllerRPG(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/lista")
    public ResponseEntity<List<Game>> listaGames() {
        return ResponseEntity.status(200).body(gameService.listaGames());

    }

    @PostMapping("/cadastro")
    public ResponseEntity<Object> criarGame(@Valid @RequestBody Game game) {
        return ResponseEntity.status(200).body(gameService.criarGame(game));
    }

}
