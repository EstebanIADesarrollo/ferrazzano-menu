import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLauncher } from './modal-launcher';

describe('ModalLauncher', () => {
  let component: ModalLauncher;
  let fixture: ComponentFixture<ModalLauncher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLauncher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLauncher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
