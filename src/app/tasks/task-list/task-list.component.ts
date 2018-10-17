import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { Category } from '../../categories/shared/category'
import { TaskService } from '../shared/task.service';
import { CategoryService } from '../../categories/shared/category.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: MatTableDataSource<Task>;
  displayedColumns = ['name', 'category', 'importance','completed', 'deadline', 'actions'];
  categories: Category[];

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService
    ) { }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = new MatTableDataSource(tasks);
    });
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAllCategories()
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  callFilteredTaskList(filteringCategoryId: number) {
    console.log(filteringCategoryId);
    this.taskService.getTasksFilteredByCategory(filteringCategoryId).subscribe(tasks => {
      this.tasks = new MatTableDataSource(tasks);
    });
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
  
  updateTable(): void {
    this.tasks = new MatTableDataSource(this.tasks.data);
  }

}