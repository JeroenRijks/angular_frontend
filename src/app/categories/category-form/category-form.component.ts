import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  categoryForm = new FormGroup({
    categoryId: new FormControl,
    name: new FormControl('', Validators.required)
  });
  isExisting: boolean;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    this.determineIsExisting();
    if (this.isExisting){
      this.populateCategoryFields();
    }
  }

  onSubmit() {
    if (this.isExisting) {
      this.categoryService.updateCategory(this.categoryForm.get('id').value, this.categoryForm.getRawValue()).subscribe();
    } else {
      this.categoryService.addCategory(this.categoryForm.getRawValue()).subscribe();
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

  populateCategoryFields() {
    const id = this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategoryById(+id).subscribe(category => {
      this.categoryForm.patchValue({
        categoryId: category.categoryId,
        name: category.name
      })
    });
  }

}
