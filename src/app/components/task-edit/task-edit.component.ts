import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskDetailsComponent implements OnInit {
  taskForm: FormGroup;
  task!: Task;
  isEditMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['incomplete', Validators.required]
    });
  }

  ngOnInit() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.isEditMode = true;
      this.taskService.getTask(+taskId).subscribe((task) => {
        this.task = task;
        this.taskForm.patchValue(task);
      });
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;
      const task: Task = {
        id: this.isEditMode ? this.task.id : null,
        title: formValue.title,
        description: formValue.description,
        status: formValue.status
      };

      if (this.isEditMode) {
        this.taskService.updateTask(task).subscribe(() => {
          this.router.navigate(['/tasks']);
        });
      } else {
        this.taskService['createTask'](task).subscribe(() => {
          this.router.navigate(['/tasks']);
        });
      }
    }
  }
}