package com.dblazquez.Exercice2.controller;

import com.dblazquez.Exercice2.dto.EmployerDto;
import com.dblazquez.Exercice2.dto.SaleDto;
import com.dblazquez.Exercice2.dto.SaleRequest;
import com.dblazquez.Exercice2.services.EmployerService;
import com.dblazquez.Exercice2.services.SaleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/sales")
@RequiredArgsConstructor
public class SaleController {
    private final SaleService saleService;
    private final EmployerService employerService;

    /* Get Sales by EmployerId */
    @GetMapping("/employees")
    public ResponseEntity<?> listEmployee(@RequestBody EmployerDto employerDto) {
        if(employerService.existEmployee(employerDto.getId())){
            return new ResponseEntity<>(saleService.getSalesEmployeeId(employerDto.getId()), HttpStatus.ACCEPTED);
        }

        return new ResponseEntity<>("Employer not found.", HttpStatus.BAD_REQUEST);
    }

    /* Add new Sale */
    @PostMapping("/add")
    public ResponseEntity<?> addSale(@RequestBody SaleRequest saleRequest) {
        if(employerService.existEmployee(saleRequest.getEmployee_id()))
        {
                SaleDto newSale = saleService.addSale(saleRequest);
                return new ResponseEntity<>(newSale, HttpStatus.CREATED);
        }

        return new ResponseEntity<>("Employer not found", HttpStatus.BAD_REQUEST);
    }
}
