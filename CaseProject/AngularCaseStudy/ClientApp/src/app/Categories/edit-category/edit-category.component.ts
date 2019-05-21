import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { WorkoutService } from '../../workout.service';
import { Category } from '../../Category';

@Component({
  selector: 'edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit {
  public click: boolean = true;
  frmCat: FormGroup;
  @Input() NameAdd: Category;


  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService, private fb: FormBuilder) { }
  get f() {
    return this.frmCat.controls;
  }


  ngOnInit() {
    this.frmCat = this.fb.group({

      name: new FormControl(this.NameAdd.category_name, [Validators.required, Validators.minLength(3)])
    });
    let id = this.currentRoute.snapshot.paramMap.get('id');




  }


  saveForm(frm: NgForm) {
    if (frm.valid) {
      let cat: Category = new Category(frm.value.id, frm.value.name);
      this.service.update(cat).subscribe(
        (data) => alert('updated'),
        (error) => console.log(error)
      );
    }

  }
  public Enable(): void {
    this.f.name.enable();
  }
  public Disabled(): void {
    this.f.name.disable();
  }
}
