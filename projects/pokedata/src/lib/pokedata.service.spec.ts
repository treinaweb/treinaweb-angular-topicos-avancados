import { TestBed, inject } from '@angular/core/testing';

import { PokedataService } from './pokedata.service';

describe('PokedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokedataService]
    });
  });

  it('should be created', inject([PokedataService], (service: PokedataService) => {
    expect(service).toBeTruthy();
  }));
});
