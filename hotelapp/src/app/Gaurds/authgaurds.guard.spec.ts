import { TestBed } from '@angular/core/testing';

import { AuthgaurdsGuard } from './authgaurds.guard';

describe('AuthgaurdsGuard', () => {
  let guard: AuthgaurdsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthgaurdsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
