import { TestBed } from '@angular/core/testing';

import { TaskApplicationResourceService } from './taskapplication.resource';

describe('TaskApplicationResourceService', () => {
  let service: TaskApplicationResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskApplicationResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
