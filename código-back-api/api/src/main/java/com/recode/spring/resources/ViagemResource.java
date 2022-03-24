package com.recode.spring.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recode.spring.entities.Viagem;
import com.recode.spring.servicies.ViagemService;

@RestController
@RequestMapping("/viagens")
@CrossOrigin("http://localhost:3000/")
public class ViagemResource {

	@Autowired
	private ViagemService service;

	@GetMapping
	public List<Viagem> findAll() {
		return service.findAll();
	}
	
	@GetMapping(value = "/{id}")
	public Viagem findById(@PathVariable Long id) {
		return service.findById(id);
	}

	@PostMapping(value = "/")
	public ResponseEntity<Viagem> save(@RequestBody Viagem viagem) {
		service.save(viagem);
		return ResponseEntity.ok().body(viagem);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Viagem> delete(@PathVariable Long id) {
		Viagem viagem = service.findById(id);
		service.delete(id);
		return ResponseEntity.ok().body(viagem);
	}
	
	@PutMapping(value = "/update")
	public ResponseEntity<Viagem> update(@RequestBody Viagem viagem) {
		viagem = service.update(viagem);
		return ResponseEntity.ok().body(viagem);
	}

}