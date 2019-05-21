import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../../workout.service';
import { Category } from '../../Category';


@Component({
  selector: 'delete-category',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
/** delete-category component*/
export class DeleteCategoryComponent implements OnInit {
  Cat: Category;

  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService) { }

  ngOnInit() {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe(
      (data) => this.Cat = data,
      (error) => alert('Not found')
    );
  }
  delete() {
    this.service.delete(this.Cat.category_id).subscribe(
      (data) => alert('Deleted'),
      (error) => alert('Failed to delete'));
  }
}
