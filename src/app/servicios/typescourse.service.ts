import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { TypesCourse } from '../modelos/typesCourse';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TypescourseService {
  typescourseCollection: AngularFirestoreCollection<TypesCourse>;
  typesCourse: Observable<TypesCourse[]>;
  typescourseDoc: AngularFirestoreDocument<TypesCourse>;
  constructor(public afs:AngularFirestore) {
    this.typescourseCollection = this.afs.collection('typesCourse');
    // this.coursess = this.afs.collection('coursess').valueChanges();
    this.typesCourse = this.typescourseCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as TypesCourse;
        data.code = a.payload.doc.id;
        return data;
      });
    });
  }

  getTypesCourse() {
    return this.typesCourse; 
  }

  addTypesCourse(typescourse: TypesCourse) {
    this.typescourseCollection.add(typescourse);
  }

  deleteTypesCourse(typesCourse: TypesCourse) {
    this.typescourseDoc = this.afs.doc('typesCourse/${typesCourse.id}');
    this.typescourseDoc.delete();
  }

  updateTypesCourse(typesCourse: TypesCourse) {
    this.typescourseDoc = this.afs.doc('typesCourse/${typesCourse.id}');
    this.typescourseDoc.update(typesCourse);
  }
}