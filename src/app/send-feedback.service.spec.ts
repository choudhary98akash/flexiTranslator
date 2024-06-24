import { TestBed } from '@angular/core/testing';

import { SendFeedbackService } from './send-feedback.service';

describe('SendFeedbackService', () => {
  let service: SendFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
