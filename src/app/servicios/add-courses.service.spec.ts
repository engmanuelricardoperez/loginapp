import { TestBed, inject } from '@angular/core/testing';

import { AddCoursesService } from './add-courses.service';

describe('AddCoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCoursesService]
    });
  });

  it('should be created', inject([AddCoursesService], (service: AddCoursesService) => {
    expect(service).toBeTruthy();
  }));
});
