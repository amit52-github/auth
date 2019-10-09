import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerformComponent } from './schedulerform.component';

describe('SchedulerformComponent', () => {
  let component: SchedulerformComponent;
  let fixture: ComponentFixture<SchedulerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
