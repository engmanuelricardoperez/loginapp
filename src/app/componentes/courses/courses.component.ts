import { Component, OnInit } from '@angular/core';
import { Courses} from '../../modelos/courses';
import { CoursesService} from '../../servicios/courses.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses : Courses[];
  editState: boolean = false;
  itemToEdit: Courses;
  constructor(public coursesServices: CoursesService) { }

  ngOnInit() {
    this.coursesServices.getCourses().subscribe(courses => {
      console.log(this.courses);
      this.courses = courses;
   
  });
}

  editItem(event, courses: Courses){
  this.editState = true;
  this.itemToEdit = courses;
  }

  updateItem(courses: Courses){
  this.coursesServices.updateCourses(courses);
  this.clearState();
  }

  clearState(){
  this.editState = false;
  this.itemToEdit = null;
  }
}
