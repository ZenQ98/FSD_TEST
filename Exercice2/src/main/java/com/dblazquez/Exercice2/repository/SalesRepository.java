package com.dblazquez.Exercice2.repository;

import com.dblazquez.Exercice2.entity.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesRepository extends JpaRepository<Sale, Integer> {

    Iterable<Sale> findAllByEmployee(Integer employeeId);

    Sale findTopByOrderByIdDesc();
}
