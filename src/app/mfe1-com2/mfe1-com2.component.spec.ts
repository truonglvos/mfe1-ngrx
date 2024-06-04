import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe1Com2Component } from './mfe1-com2.component';

describe('Mfe1Com2Component', () => {
  let component: Mfe1Com2Component;
  let fixture: ComponentFixture<Mfe1Com2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mfe1Com2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mfe1Com2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
