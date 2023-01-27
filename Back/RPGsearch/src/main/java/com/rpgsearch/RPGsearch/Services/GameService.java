package com.rpgsearch.RPGsearch.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rpgsearch.RPGsearch.Model.Game;
import com.rpgsearch.RPGsearch.Repository.IGames;

@Service
public class GameService {
    private IGames repository;


    public GameService(IGames repository) {
        this.repository = repository;
    }

    public List<Game> listaGames(){
        List<Game> lista = repository.findAll();
        return lista;
    }

    public Game criarGame(Game gameCadastro){
        Game criarGame = repository.save(gameCadastro);
        return criarGame;
    }

  
}
