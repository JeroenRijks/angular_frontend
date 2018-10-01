import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  taskForm = new FormGroup({
    taskId: new FormControl,
    name: new FormControl('', Validators.required)
  });
  isExisting: boolean;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.determineIsExisting();
    if (this.isExisting){
      this.populateTaskFields();
    }
  }

  onSubmit() {
    if (this.isExisting) {
      this.taskService.updateTask(this.taskForm.get('id').value, this.taskForm.getRawValue()).subscribe();
    } else {
      this.taskService.addTask(this.taskForm.getRawValue()).subscribe();
    }
  }

  determineIsExisting() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isExisting = true;
    } else {
      this.isExisting = false;
    }
  }

  populateTaskFields() {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.getTaskById(+id).subscribe(task => {
      this.taskForm.patchValue({
        taskId: task.taskId,
        name: task.name
      })
    });
  }
}
