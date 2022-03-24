package com.recode.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.recode.spring.entities.Viagem;


@Repository
public interface ViagemRepository extends JpaRepository<Viagem, Long> {

}