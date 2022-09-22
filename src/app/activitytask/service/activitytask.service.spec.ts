import { TestBed } from '@angular/core/testing';

import { ActivityTaskService } from './activitytask.service';

describe('ActivityTaskService', () => {
  let service: ActivityTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
