import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplicationComponent } from './view-application.component';

describe('ViewApplicationComponent', () => {
  let component: ViewApplicationComponent;
  let fixture: ComponentFixture<ViewApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewApplicationComponent]
    });
    fixture = TestBed.createComponent(ViewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
