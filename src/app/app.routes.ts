import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskTableComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}