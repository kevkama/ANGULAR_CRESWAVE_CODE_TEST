import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskTableComponent } from '../components/task-table/task-table.component';
import { TaskDetailsComponent } from '../components/task-details/task-details.component';
import { TaskEditComponent } from '../components/task-edit/task-edit.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TaskTableComponent,
    TaskEditComponent
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
    MatIconModule
  ]
})
export class TasksModule { }