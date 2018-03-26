import { TestBed, inject } from '@angular/core/testing';

import { TypescourseService } from './typescourse.service';

describe('TypescourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypescourseService]
    });
  });

  it('should be created', inject([TypescourseService], (service: TypescourseService) => {
    expect(service).toBeTruthy();
  }));
});
