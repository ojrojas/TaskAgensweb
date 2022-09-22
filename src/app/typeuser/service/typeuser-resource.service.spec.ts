import { TestBed } from '@angular/core/testing';

import { TypeuserResourceService } from './typeuser.resource';

describe('TypeuserResourceService', () => {
  let service: TypeuserResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeuserResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
