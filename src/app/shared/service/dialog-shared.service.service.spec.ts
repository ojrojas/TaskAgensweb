import { TestBed } from '@angular/core/testing';

import { DialogSharedService } from './dialog-shared.service';

describe('DialogSharedService', () => {
  let service: DialogSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
