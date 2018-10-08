import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category';
import { CategoryService } from '../shared/category.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: MatTableDataSource<Category>;
  displayedColumns = ['name','actions'];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = new MatTableDataSource(categories);
    });
  }

  updateTable(){
    this.categories = new MatTableDataSource(this.categories.data);
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