import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: MatTableDataSource<Task>;
  displayedColumns = ['name', 'category', 'importance','completed', 'deadline', 'actions'];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = new MatTableDataSource(tasks);
    });
  }

  updateTable(): void {
    this.tasks = new MatTableDataSource(this.tasks.data);
  }

  deleteTaskById(taskId: number): void {
    this.taskService.deleteTaskById(taskId).subscribe();
    this.spliceFromTable(taskId);
  }

  spliceFromTable(deletedTaskId: number): void {
    for (var index = 0; index < this.tasks.data.length; index++) {
      if (this.tasks.data[index].taskId == deletedTaskId) {
        this.tasks.data.splice(index,1);
        this.updateTable();
        break;
      };
    };
  }
}