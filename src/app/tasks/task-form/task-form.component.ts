import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: number;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private taskService: TaskService) { }

  ngOnInit() {
    this.determineIsExisting();
    if (this.isExisting){
      this.populateTaskFields();
    }
    console.log("isExisting: " + this.isExisting);
  }

  determineIsExisting() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isExisting = true;
    } else {
      this.isExisting = false;
    }
  }

  onSubmit() {
    if (this.isExisting) {
      this.taskService.updateTask(this.id, this.taskForm.getRawValue()).subscribe(task => {
        this.router.navigate(['/tasks']);
      });
    } else {
      this.taskService.addTask(this.taskForm.getRawValue()).subscribe(task => {        
        this.router.navigate(['/tasks']);
      });
    }
  }

  populateTaskFields() {
    this.taskService.getTaskById(this.id).subscribe(task => {
      this.taskForm.patchValue({
        taskId: task.taskId,
        name: task.name,
        category: task.category,
        importance: task.importance,
        deadline: task.deadline,
        completed: task.completed
      })
    });
  }
}
