package com.rpgsearch.RPGsearch.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rpgsearch.RPGsearch.Model.Game;

public interface IGames extends JpaRepository<Game, Integer> {
    
}
