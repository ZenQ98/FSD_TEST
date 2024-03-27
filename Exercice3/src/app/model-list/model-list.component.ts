import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-model-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './model-list.component.html',
  styleUrl: './model-list.component.css'
})

export class ModelListComponent implements OnInit {
  models: any[] = [];
  filteredModels: any[] = [];
  modelscopy: any[] = [];
  make: string = 'Ford';

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.getModels();
  }

  // Pedir todos los modelos
  getModels() {
    this.modelService.getModels(this.make)
      .subscribe(models => {
        this.models = models;
        this.applyFilter('');
      });
  }

  applyFilter(filterValue: string) {
    
    this.filteredModels = [];

    // Si esta vacio se muestra todo
    if (!filterValue.trim()) {
      this.filteredModels = this.models;
    } else {
      // Si no se muestra el filtro
      this.filteredModels = this.models.filter(model =>
        model.model_name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
  }  

}
