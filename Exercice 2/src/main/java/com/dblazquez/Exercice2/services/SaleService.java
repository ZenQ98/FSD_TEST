package com.dblazquez.Exercice2.services;

import com.dblazquez.Exercice2.dto.SaleDto;
import com.dblazquez.Exercice2.dto.SaleRequest;
import com.dblazquez.Exercice2.entity.Sale;

public interface SaleService {

    SaleDto addSale(SaleRequest saleRequest);

    Iterable<Sale> getSalesEmployeeId(Integer employee_id);
}
