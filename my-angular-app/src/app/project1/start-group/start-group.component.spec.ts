import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartGroupComponent } from './start-group.component';

describe('StartGroupComponent', () => {
  let component: StartGroupComponent;
  let fixture: ComponentFixture<StartGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
