package com.rpgsearch.RPGsearch.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rpgsearch.RPGsearch.Model.Cadastro;
import com.rpgsearch.RPGsearch.Services.GameService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/cadastro")
public class ControllerRPG {

    private GameService gameService;

    public ControllerRPG(GameService gameService){
    this.gameService = gameService;
}

@GetMapping()
public ResponseEntity<List<Cadastro>> listaGames(){
    return ResponseEntity.status(200).body(gameService.listaGames());

}

@PostMapping()
public ResponseEntity<Object> cadastrar(@Valid @RequestBody Cadastro cadastro){
    return ResponseEntity.status(200).body(gameService.criarGame(cadastro));
}


}

