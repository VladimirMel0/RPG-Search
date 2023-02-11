package com.rpgsearch.RPGsearch.Services;

import java.util.List;
import java.util.Optional;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rpgsearch.RPGsearch.Model.Game;
import com.rpgsearch.RPGsearch.Repository.IGames;

@Service
public class GameService {
    @Autowired
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

    public Game findById (Integer id){
        Optional<Game> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado!", obj));
    }

  
}
