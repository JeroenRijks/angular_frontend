import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: number;
  isExisting: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.determineIsExisting();
    if (this.isExisting){
      this.populateCategoryFields();
    }
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
      this.categoryService.updateCategory(this.id, this.categoryForm.getRawValue()).subscribe(category => {
        this.router.navigate(['/categories']);
      });
    } else {
      this.categoryService.addCategory(this.categoryForm.getRawValue()).subscribe(category => {        
        this.router.navigate(['/categories']);
      });
    }
  }

  populateCategoryFields() {
    this.categoryService.getCategoryById(this.id).subscribe(category => {
      this.categoryForm.patchValue({
        categoryId: category.categoryId,
        name: category.name
      })
    });
  }

}
