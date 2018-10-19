import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category';
import { CategoryService } from '../shared/category.service';
import { MatTableDataSource } from '@angular/material';
import { TaskService } from '../../tasks/shared/task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: MatTableDataSource<Category>;
  displayedColumns = ['name','showRelevantTasks','delete'];

  constructor(private categoryService: CategoryService,
              private router: Router
    ) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = new MatTableDataSource(categories);
    });
  }

  updateTable(){
    this.categories = new MatTableDataSource(this.categories.data);
  }

  showRelevantTasks(categoryId: number): void {
    this.router.navigate(['/tasks']);   // Reorganise filtering using urls
  }

  deleteCategoryById(categoryId: number): void {
      this.categoryService.deleteCategoryById(categoryId).subscribe();
      this.spliceFromTable(categoryId);
  }

  spliceFromTable(deletedCategoryId: Number): void {
    for (var index = 0; index < this.categories.data.length; index++) {
      if (this.categories.data[index].categoryId == deletedCategoryId) {
        this.categories.data.splice(index,1);
        this.updateTable();
        break;
      };
    };
  }
}