package com.guilhermesilva.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.guilhermesilva.api.entities.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}