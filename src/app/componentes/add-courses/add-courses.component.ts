import { Component, OnInit } from '@angular/core';
import { Courses } from '../../modelos/courses';
import { CoursesService } from '../../servicios/courses.service'
@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})
export class AddCoursesComponent implements OnInit {
course: Courses = {
  title : '',
  code: '',
  content1: '',
  content2: '',
  requirements: '',
  slug: '',
  startDate: '',
  typeCourse: ''
}

  constructor(public courseService: CoursesService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.course.title != '' && this.course.content1 != '')
    {
      this.courseService.addCourses(this.course);
      this.course.title = '';
      this.course.code= '';
      this.course.content1= '';
      this.course.content2= '';
      this.course.requirements= '';
      this.course.slug= '';
      this.course.startDate= '';
      this.course.typeCourse= '';
    }
    console.log();
    }
    
    deleteCourse(event, task){
      const respose = confirm('Are you sure you want delete?');
      if(respose){
        this.courseService.deleteCourses(this.course);
      }
  }
}
