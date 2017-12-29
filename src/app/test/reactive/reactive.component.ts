import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray} from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  formModel: FormGroup = new FormGroup({
    username: new FormControl("aaa"),
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl("111"),
      new FormControl("222"),
      new FormControl("333")
    ])
  });


  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log(this.formModel.value)
    }
  }

  addEmail() {
    let emails = this.formModel.get("emails") as FormArray;

    emails.push(new FormControl());
  }
}
