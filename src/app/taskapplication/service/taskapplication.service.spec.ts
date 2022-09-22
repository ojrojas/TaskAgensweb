import { TestBed } from '@angular/core/testing';

import { TaskApplicationService } from './taskapplication.service';

describe('TaskApplicationService', () => {
  let service: TaskApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
