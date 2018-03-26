import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { Courses } from '../modelos/courses';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CoursesService {
  coursesCollection: AngularFirestoreCollection<Courses>;
  courses: Observable<Courses[]>;
  coursesDoc: AngularFirestoreDocument<Courses>;
  constructor(public afs:AngularFirestore) {
    this.coursesCollection = this.afs.collection('courses');
    // this.coursess = this.afs.collection('coursess').valueChanges();
    this.courses = this.coursesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Courses;
        data.code = a.payload.doc.id;
        return data;
      });
    });
  }

  getCourses() {
    return this.courses; 
  }

  addCourses(courses: Courses) {
    this.coursesCollection.add(courses);
  }

  deleteCourses(courses: Courses) {
    this.coursesDoc = this.afs.doc('courses/${courses.id}');
    this.coursesDoc.delete();
  }

  updateCourses(courses: Courses) {
    this.coursesDoc = this.afs.doc('courses/${courses.id}');
    this.coursesDoc.update(courses);
  }
}