import { TestBed } from '@angular/core/testing';

import { HardCodeAuthenticationService } from './hard-code-authentication.service';

describe('HardCodeAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardCodeAuthenticationService = TestBed.get(HardCodeAuthenticationService);
    expect(service).toBeTruthy();
  });
});
