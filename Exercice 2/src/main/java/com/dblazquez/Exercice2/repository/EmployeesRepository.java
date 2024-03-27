package com.dblazquez.Exercice2.repository;

import com.dblazquez.Exercice2.entity.Employer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeesRepository extends JpaRepository<Employer, Integer > {

    boolean existsByName(String employeename);

    boolean existsByState(String state);
}
