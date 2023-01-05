import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcercaDeMiComponent } from './modal-acerca-de-mi.component';

describe('ModalAcercaDeMiComponent', () => {
  let component: ModalAcercaDeMiComponent;
  let fixture: ComponentFixture<ModalAcercaDeMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcercaDeMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAcercaDeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
