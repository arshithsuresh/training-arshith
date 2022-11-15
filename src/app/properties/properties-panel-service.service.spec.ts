import { TestBed } from '@angular/core/testing';

import { PropertiesPanelServiceService } from './properties-panel-service.service';

describe('PropertiesPanelServiceService', () => {
  let service: PropertiesPanelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiesPanelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
