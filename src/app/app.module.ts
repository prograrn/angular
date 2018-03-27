
//components
import { FormComponent } from './components/Form/form.component';
import { EventsComponent } from './components/events/events.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { AppComponent } from './app.component';
import { CoursesComponent } from "./courses.component";

//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//service
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SandboxComponent,
    EventsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
