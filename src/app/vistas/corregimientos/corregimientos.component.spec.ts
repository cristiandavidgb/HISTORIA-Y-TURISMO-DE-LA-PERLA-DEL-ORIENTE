import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorregimientosComponent } from './corregimientos.component';

describe('CorregimientosComponent', () => {
  let component: CorregimientosComponent;
  let fixture: ComponentFixture<CorregimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorregimientosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorregimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
