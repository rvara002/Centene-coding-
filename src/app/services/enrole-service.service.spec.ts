import { TestBed } from '@angular/core/testing';

import { EnroleServiceService } from './enrole-service.service';

describe('EnroleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnroleServiceService = TestBed.get(EnroleServiceService);
    expect(service).toBeTruthy();
  });
});
