package com.rpgsearch.RPGsearch.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.rpgsearch.RPGsearch.Model.Cadastro;
import com.rpgsearch.RPGsearch.Repository.IGames;

@Service
public class GameService {
    private IGames repository;


    public GameService(IGames repository) {
        this.repository = repository;
    }

    public List<Cadastro> listaGames(){
        List<Cadastro> lista = repository.findAll();
        return lista;
    }

    public Cadastro criarGame(Cadastro gameCadastro){
        Cadastro usuarioNovo = repository.save(gameCadastro);
        return usuarioNovo;
    }

  
}
