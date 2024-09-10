import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaunayfloraComponent } from './faunayflora.component';

describe('FaunayfloraComponent', () => {
  let component: FaunayfloraComponent;
  let fixture: ComponentFixture<FaunayfloraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaunayfloraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaunayfloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
