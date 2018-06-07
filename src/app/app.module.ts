import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChidComponent } from './chid/chid.component';
import {FormsModule} from '@angular/forms';
import { ScheduleComponent } from './routes/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ChidComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
