import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './pages/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPageComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
