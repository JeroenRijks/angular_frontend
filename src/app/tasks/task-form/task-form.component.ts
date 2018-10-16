import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../shared/task.service';
import { CategoryService } from '../../categories/shared/category.service';
import { Category } from '../../categories/shared/category'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  taskForm = new FormGroup({
    taskId: new FormControl,
    name: new FormControl(''),
    category: new FormGroup({
      name: new FormControl(''),
      categoryId: new FormControl('')
    }),
    importance: new FormControl(''),
    deadline: new FormControl(''),
    completed: new FormControl('')
  });

  id: number;
  isExisting: boolean;
  categories: Category[];
  activeCategoryId: number;
  priorityTypes = ["LOW","MEDIUM","HIGH"];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private taskService: TaskService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.getCategories();
    this.determineIsExisting();
    if (this.isExisting){
      this.populateTaskFields();
    }
  }

  getCategories() {
    this.categoryService.getAllCategories()
      .subscribe(categories => 
        this.categories = categories
      );
  }

  determineIsExisting() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isExisting = true;
    } else {
      this.isExisting = false;
    }
  }

  populateTaskFields() {
    this.taskService.getTaskById(this.id).subscribe(task => {
      this.patchAllFieldsExceptCategory(task);
      this.setDefaultCategory(task.category.categoryId);
    });
  }

  patchAllFieldsExceptCategory(task) {
    this.taskForm.patchValue({  
      taskId: task.taskId,
      name: task.name,
      importance: task.importance,
      deadline: task.deadline,
      completed: task.completed
    });
  }

  setDefaultCategory(currentCategoryId) {
    this.activeCategoryId = currentCategoryId;
  }

  onSubmit(categoryIndex) {
    this.attachCategoryToForm(categoryIndex)
    this.submitForm();
    this.router.navigate(['/tasks']);
  }

  attachCategoryToForm(index){
    const categoryObject = this.taskForm.get('category') as FormGroup;
    categoryObject.setValue({
      name: this.categories[index].name,
      categoryId: this.categories[index].categoryId
    });
  }

  submitForm() {
    if (this.isExisting) {
      this.sendPutRequest();
    } else {
      this.sendPostRequest();

    }
  }
  
  sendPutRequest() {
    this.taskService.updateTask(this.id, this.taskForm.getRawValue()).subscribe();
  }

  sendPostRequest() {
    this.taskService.addTask(this.taskForm.getRawValue()).subscribe();
  }
}
