import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrimitiveControlsComponent } from './primitive-controls.component';

describe('PrimitiveControlsComponent', () => {
  let component: PrimitiveControlsComponent;
  let fixture: ComponentFixture<PrimitiveControlsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimitiveControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitiveControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
