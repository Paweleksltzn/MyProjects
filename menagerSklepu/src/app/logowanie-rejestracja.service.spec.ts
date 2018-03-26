import { TestBed, inject } from '@angular/core/testing';

import { LogowanieRejestracjaService } from './logowanie-rejestracja.service';

describe('LogowanieRejestracjaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogowanieRejestracjaService]
    });
  });

  it('should be created', inject([LogowanieRejestracjaService], (service: LogowanieRejestracjaService) => {
    expect(service).toBeTruthy();
  }));
});
