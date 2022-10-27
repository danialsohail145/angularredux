import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent implements OnInit {
  nameControl: FormControl;
  ageControl: FormControl;
  contactControl: FormControl;
  addUserForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.nameControl = new FormControl('');
    this.ageControl = new FormControl('');
    this.contactControl = new FormControl('');
    this.addUserForm = new FormGroup({
      name: this.nameControl,
      age: this.ageControl,
      contact: this.contactControl,
    });
  }

  ngOnInit(): void {}
  addUser() {
    console.log(this.nameControl.value);
  }
}
