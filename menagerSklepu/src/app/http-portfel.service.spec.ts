import { TestBed, inject } from '@angular/core/testing';

import { HttpPortfelService } from './http-portfel.service';

describe('HttpPortfelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpPortfelService]
    });
  });

  it('should be created', inject([HttpPortfelService], (service: HttpPortfelService) => {
    expect(service).toBeTruthy();
  }));
});
