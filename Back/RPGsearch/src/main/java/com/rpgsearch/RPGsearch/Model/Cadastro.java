package com.rpgsearch.RPGsearch.Model;

import com.rpgsearch.RPGsearch.Enum.EnumJogo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="cadastro")
public class Cadastro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank (message = "O nome é obrigatório")
    @Size(min = 3, message = "O nome deve ter no minimo 3 caracteres!")
    @Column(name = "nome", length =200, nullable = false)
    private String name;

    @Email(message = "Insira um email válido!")
    @NotBlank(message = "O email é obrigatório!")
    @Column(name = "email, length = 100, nullable = false")
    private String email;

    @NotBlank(message = "O Cep é obrigatório!")
    @Size(min = 8, max = 8, message = "insira um CEP válido!")
    @Column(name = "cep, length = 8, nullable = false")
    private String cep;

    @NotBlank
    @Column(name = "jogo, nullable = false")
    private EnumJogo jogo;

    @NotBlank(message = "A Descrição é obrigatório!")
    @Size(max = 5000, message = "tamanho maximo de caracteres !")
    @Column(name = "description", length = 5000, nullable = false)
    private String description;
    
}
