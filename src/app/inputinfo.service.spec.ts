import { TestBed, inject } from '@angular/core/testing';

import { InputinfoService } from './inputinfo.service';

describe('InputinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputinfoService]
    });
  });

  it('should be created', inject([InputinfoService], (service: InputinfoService) => {
    expect(service).toBeTruthy();
  }));
});
