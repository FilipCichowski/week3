import { TestBed } from '@angular/core/testing';

import { DisplayUserInfoService } from './display-user-info.service';

describe('DisplayUserInfoService', () => {
  let service: DisplayUserInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayUserInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
