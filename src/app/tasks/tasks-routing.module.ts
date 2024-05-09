import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTableComponent } from '../components/task-table/task-table.component';
import { TaskDetailsComponent } from '../components/task-details/task-details.component';
import { TaskEditComponent } from '../components/task-edit/task-edit.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TaskTableComponent,
    children: [
      { path: 'new', component: TaskEditComponent },
      { path: ':id', component: TaskDetailsComponent },
      { path: ':id/edit', component: TaskEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }