import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';





import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

// import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatTableModule,
    AppComponent,

  ],
  providers: []
})
export class AppModule{ }