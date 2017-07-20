import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Jsonp, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UsersListService } from './users-list.service';

describe('UsersListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        UsersListService,
        {
          provide: Jsonp,
          useFactory: (mockBackend, options) => {
            return new Jsonp(mockBackend, options);
          },
          deps: [ MockBackend, BaseRequestOptions ]
        },
        MockBackend,
        BaseRequestOptions,
      ]
    });
  });

  it('should be created', inject([UsersListService], (service: UsersListService) => {
    expect(service).toBeTruthy();
  }));
});
