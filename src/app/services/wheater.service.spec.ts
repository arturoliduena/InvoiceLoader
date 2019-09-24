import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { defer } from 'rxjs';

/** Create async observable that emits-once and completes
 *  after a JS engine turn */
function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/** Create async observable error that errors
 *  after a JS engine turn */
function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

import { WheaterService } from './wheater.service';

describe('WheaterService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });
  
  it('should be created', () => {
    const service: WheaterService = new WheaterService(<any> httpClientSpy);
    expect(service).toBeTruthy();
  });
});
