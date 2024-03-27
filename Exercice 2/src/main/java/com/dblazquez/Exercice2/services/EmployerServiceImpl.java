package com.dblazquez.Exercice2.services;

import com.dblazquez.Exercice2.dto.EmployerDto;
import com.dblazquez.Exercice2.entity.Employer;
import com.dblazquez.Exercice2.repository.EmployeesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployerServiceImpl implements EmployerService {
    private final EmployeesRepository employeeRepository;

    @Override
    public Iterable<Employer> getEmployees(){
        return employeeRepository.findAll();
    }

    @Override
    public Boolean existEmployee(Integer employerId) {
        return employeeRepository.existsById(employerId);
    }

}
