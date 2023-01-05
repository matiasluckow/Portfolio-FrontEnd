import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAptitudesComponent } from './modal-aptitudes.component';

describe('ModalAptitudesComponent', () => {
  let component: ModalAptitudesComponent;
  let fixture: ComponentFixture<ModalAptitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAptitudesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
