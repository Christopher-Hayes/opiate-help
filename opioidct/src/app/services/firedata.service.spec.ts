import { TestBed, inject } from '@angular/core/testing';

import { FiredataService } from './firedata.service';

describe('FiredataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiredataService]
    });
  });

  it('should be created', inject([FiredataService], (service: FiredataService) => {
    expect(service).toBeTruthy();
  }));
});
