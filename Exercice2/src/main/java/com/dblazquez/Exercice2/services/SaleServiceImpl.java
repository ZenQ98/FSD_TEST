package com.dblazquez.Exercice2.services;

import com.dblazquez.Exercice2.dto.SaleDto;
import com.dblazquez.Exercice2.dto.SaleRequest;
import com.dblazquez.Exercice2.entity.Sale;
import com.dblazquez.Exercice2.repository.SalesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SaleServiceImpl implements SaleService {
    private final SalesRepository salesRepository;

    @Override
    public SaleDto addSale(SaleRequest saleRequest) {
        Sale sale = new Sale();
        sale.setId(salesRepository.findTopByOrderByIdDesc().getId());
        sale.setAmount(saleRequest.getAmount());
        sale.setEmployee((saleRequest.getEmployee_id()));
        Sale newSale = salesRepository.save(sale);

        SaleDto saleDto = new SaleDto();
        saleDto.setId(newSale.getId());
        saleDto.setAmount(newSale.getAmount());
        saleDto.setEmployee_id(newSale.getEmployee());
        return saleDto;
    }

    @Override
    public Iterable<Sale> getSalesEmployeeId(Integer employee_id){
        return salesRepository.findAllByEmployee(employee_id);
    }


}
