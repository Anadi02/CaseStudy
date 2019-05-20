import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './Category';

@Injectable()
export class WorkoutService {
  private _url = 'http://localhost:62586/api/Category';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this._url);
  }

  getById(id: string): Observable<Category> {
    return this.http.get<Category>(this._url + `/${id}`);
  }

  save(dept: Category) {
    return this.http.post(this._url, dept);
  }

  update(dept: Category) {
    return this.http.put(this._url, dept);
  }

  delete(id: string) {
    return this.http.delete(this._url + `/${id}`);
  }

}
