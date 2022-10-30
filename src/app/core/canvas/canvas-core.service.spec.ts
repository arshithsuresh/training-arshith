import { TestBed } from '@angular/core/testing';

import { CanvasCoreService } from './canvas-core.service';

describe('CanvasCoreService', () => {
  let service: CanvasCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
