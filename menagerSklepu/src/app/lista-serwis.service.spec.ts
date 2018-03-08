import { TestBed, inject } from '@angular/core/testing';

import { ListaSerwisService } from './lista-serwis.service';

describe('ListaSerwisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaSerwisService]
    });
  });

  it('should be created', inject([ListaSerwisService], (service: ListaSerwisService) => {
    expect(service).toBeTruthy();
  }));
});
