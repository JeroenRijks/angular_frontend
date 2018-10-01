import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost:8080/api/category';

  getAllCategories(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  getCategoryById(id: number): Observable<any> {
    return this.http.get(this.baseURL + id);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseURL, category, httpOptions);
  }

  updateCategory(id:number, category: Category): Observable<Category> {
    return this.http.put<Category>(this.baseURL + id, category, httpOptions);
  }

  deleteCategoryById(id:number): Observable<any> {
    return this.http.delete(this.baseURL + id);
  }

}
