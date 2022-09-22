import { TestBed } from '@angular/core/testing';

import { ActivityTaskResourceService } from './activitytask.resource';

describe('ActivityTaskResourceService', () => {
  let service: ActivityTaskResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityTaskResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
