import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Category } from '../Category';
import { WorkoutService } from '../workout.service';
@Component({
  selector: 'add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
/** addworkout component*/
export class AddworkoutComponent implements OnInit {
  frmWorkout: FormGroup;
  public count: number = 0;
  categories: Category[];
  /** addworkout ctor */
  constructor(private fb: FormBuilder, private service: WorkoutService) {
    this.frmWorkout = this.fb.group({
      Title: new FormControl('', Validators.required),
      Note: new FormControl('', Validators.required),
      Calory: new FormControl(0, Validators.required)
    });



  }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.categories = data,
      (error) => alert('Error')
    );
  }

  inc() {
    this.count = this.count + 0.1;
  }

  dec() {
    if (this.count > 0) {
      this.count = this.count - 0.1;
    }
    else {
      this.count = 0;
    }
  }
}
