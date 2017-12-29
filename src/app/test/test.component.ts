import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {mobileValidator, equalValidator, mobileAsyncValidator} from "../validator/validators";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  formModel: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formModel = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: this.fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    })
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}
