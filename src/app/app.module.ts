import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { AddCoursesComponent } from './componentes/add-courses/add-courses.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment'
import { AuthService } from './servicios/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

//firebase database
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { CoursesComponent } from './componentes/courses/courses.component';
import { CoursesService} from './servicios/courses.service'

import { TypescourseService} from './servicios/typescourse.service'

import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';



//App Course:

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    CoursesComponent,
    AddCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-fs'),
    FlashMessagesModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, CoursesService, TypescourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
