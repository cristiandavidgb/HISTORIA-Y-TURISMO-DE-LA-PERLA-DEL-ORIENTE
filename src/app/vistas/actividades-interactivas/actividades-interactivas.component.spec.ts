import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesInteractivasComponent } from './actividades-interactivas.component';

describe('ActividadesInteractivasComponent', () => {
  let component: ActividadesInteractivasComponent;
  let fixture: ComponentFixture<ActividadesInteractivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesInteractivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesInteractivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
