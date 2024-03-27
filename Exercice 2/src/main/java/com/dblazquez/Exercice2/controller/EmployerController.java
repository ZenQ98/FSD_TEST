package com.dblazquez.Exercice2.controller;

import com.dblazquez.Exercice2.services.EmployerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor
public class EmployerController {
    private final EmployerService employerService;

    /* Get all the Employees */
    @GetMapping()
    public ResponseEntity<?> listEmployee() { return new ResponseEntity<>(employerService.getEmployees(), HttpStatus.ACCEPTED); }

}
