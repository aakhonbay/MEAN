import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupShellComponent } from './group-shell.component';

describe('GroupShellComponent', () => {
  let component: GroupShellComponent;
  let fixture: ComponentFixture<GroupShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
