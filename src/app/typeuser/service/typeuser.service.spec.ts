import { TestBed } from '@angular/core/testing';

import { TypeUserService } from './typeuser.service';

describe('TypeUserService', () => {
  let service: TypeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
