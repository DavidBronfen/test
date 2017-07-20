import { TestBed, inject } from '@angular/core/testing';

import { TweetsListService } from './tweets-list.service';

describe('TweetsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetsListService]
    });
  });

  it('should be created', inject([TweetsListService], (service: TweetsListService) => {
    expect(service).toBeTruthy();
  }));
});
