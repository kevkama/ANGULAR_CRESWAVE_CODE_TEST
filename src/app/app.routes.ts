import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksRoutingModule } from './tasks/tasks-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TasksRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }