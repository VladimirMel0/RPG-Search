package com.rpgsearch.RPGsearch.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rpgsearch.RPGsearch.Model.Cadastro;

public interface IGames extends JpaRepository<Cadastro, Integer> {
    
}
