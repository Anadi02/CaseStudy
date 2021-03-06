import { Component, OnInit } from '@angular/core';
import { Category } from '../../Category';
import { WorkoutService } from '../../workout.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class listcategorycomponent implements OnInit {

  Categories: Category[]
  constructor(private service: WorkoutService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.Categories = data,
      (error) => console.log(error)
    );
  }

  SaveCategory($event) {
    console.log($event);
    this.service.save(new Category(0, $event)).subscribe(
      (data) => alert('Added'),
      (error) => alert("Failed to add")
    );
  }


}
