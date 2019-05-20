import { Component } from '@angular/core';
import { Category } from '../../Category';
import { WorkoutService } from '../../workout.service';

@Component({
    selector: 'app-list-category',
    templateUrl: './list-category.component.html',
    styleUrls: ['./list-category.component.css']
})

export class ListCategoryComponent {
  categories: Category[];
  constructor(private service: WorkoutService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.categories = data,
      (error) => alert('Error processing request')
    );
  }
} 
