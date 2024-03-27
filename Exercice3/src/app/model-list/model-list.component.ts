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
  make: string = 'Ford';

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.getModels();
  }

  getModels(): void {
    this.modelService.getModels(this.make)
      .subscribe(models => this.models = models);
  }
}
