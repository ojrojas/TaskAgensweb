import { TestBed } from '@angular/core/testing';

import { TypeTaskResourceService } from './typetask.resource';

describe('TypeTaskResourceService', () => {
  let service: TypeTaskResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeTaskResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
