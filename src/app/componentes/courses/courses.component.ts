import { Component, OnInit } from '@angular/core';
import { Courses} from '../../modelos/courses';
import { CoursesService} from '../../servicios/courses.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses : Courses[];
  editState: boolean = false;
  coursesToEdit: Courses;
  constructor(public coursesServices: CoursesService) { }

  ngOnInit() {
    this.coursesServices.getCourses().subscribe(courses => {
      console.log(this.courses);
      this.courses = courses;
   
  });
}

deleteCourses(event, courses) {
  console.log(courses);
  const response = confirm('are you sure you want to delete?');
  if (response ) {
    this.coursesServices.deleteCourses(courses);
    const response = alert("Borrado"+courses);
  }
  else
  {
    const response = alert("NO Borrado"+courses);
  }
  
  return;
}

  editCourses(event, courses: Courses){
  this.editState = true;
  this.coursesToEdit = courses;
  }

  updateCourses(courses: Courses){
    console.log('Actualizando el curso');
  this.coursesServices.updateCourses(courses);
  this.clearState();
  }

  clearState(){
  this.editState = false;
  this.coursesToEdit = null;
  }

}
