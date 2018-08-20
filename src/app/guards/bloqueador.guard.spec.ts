import { TestBed, async, inject } from '@angular/core/testing';

import { BloqueadorGuard } from './bloqueador.guard';

describe('BloqueadorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloqueadorGuard]
    });
  });

  it('should ...', inject([BloqueadorGuard], (guard: BloqueadorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
