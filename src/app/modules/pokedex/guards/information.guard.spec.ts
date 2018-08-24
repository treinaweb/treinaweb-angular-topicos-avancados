import { TestBed, async, inject } from '@angular/core/testing';

import { InformationGuard } from './information.guard';

describe('InformationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformationGuard]
    });
  });

  it('should ...', inject([InformationGuard], (guard: InformationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
