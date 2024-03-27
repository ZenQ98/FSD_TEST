import { HttpClientJsonpModule, HttpClientModule  } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModelListComponent } from './model-list/model-list.component';
import { TrimListComponent } from './trim-list/trim-list.component';
import { TrimDetailComponent } from './trim-detail/trim-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientJsonpModule, RouterOutlet, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
})
export class AppComponent {
  title = 'Exercice3';
  
}
