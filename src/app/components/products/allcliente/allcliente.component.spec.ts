import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllclienteComponent } from './allcliente.component';

describe('AllclienteComponent', () => {
  let component: AllclienteComponent;
  let fixture: ComponentFixture<AllclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
