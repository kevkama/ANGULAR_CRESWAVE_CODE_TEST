import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TasksRoutingModule } from './tasks-routing.module';
// import { TaskTableComponent } from '../components/task-table/task-table.component';
// import { TaskDetailsComponent } from '../components/task-details/task-details.component';
// import { TaskEditComponent } from '../components/task-edit/task-edit.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TasksRoutingModule } from './task-routing.module';
import { HttpClient } from '@angular/common/http';
import { TaskServiceModule } from '../services/task-service.module';

@NgModule({

  declarations: [

  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatFormField,
    TasksTableComponent,
    TaskEditComponent  ],


})
export class TasksModule { }