import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDosComponent } from './componente-dos.component';

describe('ComponenteDosComponent', () => {
  let component: ComponenteDosComponent;
  let fixture: ComponentFixture<ComponenteDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
