import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormacionAcademicaComponent } from './modal-formacion-academica.component';

describe('ModalFormacionAcademicaComponent', () => {
  let component: ModalFormacionAcademicaComponent;
  let fixture: ComponentFixture<ModalFormacionAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormacionAcademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormacionAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
