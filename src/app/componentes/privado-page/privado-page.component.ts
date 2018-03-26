import { Component, OnInit } from '@angular/core';
import { TypesCourse} from '../../modelos/typesCourse';
import { TypescourseService} from '../../servicios/typescourse.service';

@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  styleUrls: ['./privado-page.component.scss']
})
export class PrivadoPageComponent implements OnInit {

  typesCourse : TypesCourse[];
  editState: boolean = false;
  itemToEdit: TypesCourse;
  constructor(public typesCoursesServices: TypescourseService) { }

  ngOnInit() {
    this.typesCoursesServices.getTypesCourse().subscribe(typesCourse => {
      console.log(this.typesCourse + "Tipos de cursos");
      this.typesCourse = typesCourse;
   
  });
}

  editItem(event, typesCourse: TypesCourse){
  this.editState = true;
  this.itemToEdit = typesCourse;
  }

  updateItem(typesCourse: TypesCourse){
  this.typesCoursesServices.updateTypesCourse(typesCourse);
  this.clearState();
  }

  clearState(){
  this.editState = false;
  this.itemToEdit = null;
  }

}
