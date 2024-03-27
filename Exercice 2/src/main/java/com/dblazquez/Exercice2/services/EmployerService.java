package com.dblazquez.Exercice2.services;

import com.dblazquez.Exercice2.dto.EmployerDto;
import com.dblazquez.Exercice2.entity.Employer;

public interface EmployerService {
    Iterable<Employer> getEmployees();

    Boolean existEmployee(Integer employerId);
}
