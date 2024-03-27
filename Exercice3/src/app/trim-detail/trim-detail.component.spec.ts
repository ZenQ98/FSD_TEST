import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimDetailComponent } from './trim-detail.component';

describe('TrimDetailComponent', () => {
  let component: TrimDetailComponent;
  let fixture: ComponentFixture<TrimDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrimDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrimDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
