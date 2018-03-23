import { EventsComponent } from './components/events/events.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from "./courses.component";


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SandboxComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
