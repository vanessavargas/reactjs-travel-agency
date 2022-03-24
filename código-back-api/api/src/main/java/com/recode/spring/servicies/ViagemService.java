package com.recode.spring.servicies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.recode.spring.entities.Viagem;
import com.recode.spring.repositories.ViagemRepository;
import com.recode.spring.servicies.exceptions.ObjectNotFoundException;


@Service
public class ViagemService {

	@Autowired
	private ViagemRepository repository;

	@Transactional(readOnly = true)
	public List<Viagem> findAll() {
		List<Viagem> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Viagem findById(Long id) {
		Optional<Viagem> viagem = repository.findById(id);
		return repository.findById(id).get();
	}

	@Transactional(readOnly = true)
	public void save(Viagem viagem) {
		repository.save(viagem);
	}

	public void delete(Long id) {
		Optional<Viagem> viagem = repository.findById(id);
		if (viagem.isPresent()) {
			repository.delete(viagem.get());
		} else {
			System.out.println("Viagem não existe");
		}
	}
	
	public Viagem update(Viagem viagem) {
		return repository.save(viagem);
	}
}