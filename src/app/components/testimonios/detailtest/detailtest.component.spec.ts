import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtestComponent } from './detailtest.component';

describe('DetailtestComponent', () => {
  let component: DetailtestComponent;
  let fixture: ComponentFixture<DetailtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
