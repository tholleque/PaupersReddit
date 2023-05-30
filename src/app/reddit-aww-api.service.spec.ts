import { TestBed } from '@angular/core/testing';

import { RedditAwwAPIService } from './reddit-aww-api.service';

describe('RedditAwwAPIService', () => {
  let service: RedditAwwAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedditAwwAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
