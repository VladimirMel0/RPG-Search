package com.rpgsearch.RPGsearch.Model;

import com.rpgsearch.RPGsearch.Enum.EnumJogo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="cadastro")
public class Cadastro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String name;

    @NotNull
    private String email;
    @NotNull
    private String cep;
    @NotNull
    private EnumJogo jogo;
    @NotNull
    private String description;
    
}
