/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElasticSearchService } from './elastic.service';

describe('Service: Elastic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElasticSearchService]
    });
  });

  it('should ...', inject([ElasticSearchService], (service: ElasticSearchService) => {
    expect(service).toBeTruthy();
  }));
});