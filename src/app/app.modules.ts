import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TasksModule } from './tasks/tasks.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatTableModule,
    AppComponent,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    TasksModule,
    ReactiveFormsModule,
    

  ],
  providers: []
})
export class AppModule{ }