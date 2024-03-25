package com.dblazquez.Exercice2.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "sales")
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer amount;

    @Column(name = "employee_id")
    private Integer employee;
}
