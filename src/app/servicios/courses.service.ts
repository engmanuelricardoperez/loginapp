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
    console.log(courses);
    console.log(this.afs.doc('Courses/${Courses.code}'));
    console.log(courses.code);
    this.coursesCollection.doc(courses.code).delete();
    //this.coursesDoc = this.afs.doc('courses/${Courses.code}');
    //this.coursesDoc.delete();
  }

  updateCourses(courses: Courses) {
    //this.coursesCollection.doc(courses.code).update({ status: 'inactive' });
    this.coursesCollection.doc(courses.code).update(courses);
    //this.coursesDoc = this.afs.doc('courses/${Courses.code}');
    //this.coursesDoc.update(courses);
  }
}