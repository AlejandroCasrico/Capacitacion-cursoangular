/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DbzService } from './dbz.service';

describe('Service: Dbz', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbzService]
    });
  });

  it('should ...', inject([DbzService], (service: DbzService) => {
    expect(service).toBeTruthy();
  }));
});
