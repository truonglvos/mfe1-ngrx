import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe1Com1Component } from './mfe1-com1.component';

describe('Mfe1Com1Component', () => {
  let component: Mfe1Com1Component;
  let fixture: ComponentFixture<Mfe1Com1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mfe1Com1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mfe1Com1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
