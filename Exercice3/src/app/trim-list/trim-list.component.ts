import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TrimService } from '../services/trim.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trim-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trim-list.component.html',
  styleUrl: './trim-list.component.css'
})
export class TrimListComponent implements OnInit {
  trims: any[] = [];
  make: string = 'Ford';
  modelId: string = '';

  constructor(private route: ActivatedRoute, private trimService: TrimService) { }

  // Pedir acabados por modelo
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelId = params.get('modelId')!;
      this.getTrims();
    });
  }

  getTrims(): void {
    this.trimService.getTrims(this.make, this.modelId)
      .subscribe((response: any) => {
        this.trims = response.Trims || [];
      });
  }
}
