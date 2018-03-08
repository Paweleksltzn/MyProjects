import { TestBed, inject } from '@angular/core/testing';

import { SklepSerwisService } from './sklep-serwis.service';

describe('SklepSerwisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SklepSerwisService]
    });
  });

  it('should be created', inject([SklepSerwisService], (service: SklepSerwisService) => {
    expect(service).toBeTruthy();
  }));
});
