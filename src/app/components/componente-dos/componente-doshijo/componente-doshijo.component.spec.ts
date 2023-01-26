import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDoshijoComponent } from './componente-doshijo.component';

describe('ComponenteDoshijoComponent', () => {
  let component: ComponenteDoshijoComponent;
  let fixture: ComponentFixture<ComponenteDoshijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteDoshijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteDoshijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
