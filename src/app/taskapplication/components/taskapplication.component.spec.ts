import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskApplicationComponent } from './taskapplication.component';

describe('TaskApplicationComponent', () => {
  let component: TaskApplicationComponent;
  let fixture: ComponentFixture<TaskApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
