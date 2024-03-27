import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TrimService } from '../services/trim.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trim-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trim-detail.component.html',
  styleUrl: './trim-detail.component.css'
})
export class TrimDetailComponent implements OnInit {
  make: string = 'Ford';
  modelId: string = '';
  trimId: string = '';
  trimDetails: any;

  constructor(private route: ActivatedRoute, private trimService: TrimService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.modelId = params.get('modelId')!;
      this.trimId = params.get('trimId')!;
      this.getTrimDetails();
    });
  }

  getTrimDetails(): void {
    this.trimService.getTrimDetails(this.make,this.modelId, this.trimId)
      .subscribe((trim: any) => {
        this.trimDetails = trim;
      });
  }
}
