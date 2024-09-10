import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGenelComponent } from './informacion-genel.component';

describe('InformacionGenelComponent', () => {
  let component: InformacionGenelComponent;
  let fixture: ComponentFixture<InformacionGenelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionGenelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionGenelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
