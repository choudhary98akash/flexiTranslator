import { TestBed } from '@angular/core/testing';

import { FetchStatsService } from './fetch-stats.service';

describe('FetchStatsService', () => {
  let service: FetchStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
