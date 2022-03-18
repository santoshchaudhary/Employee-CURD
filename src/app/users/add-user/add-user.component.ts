import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup = new FormGroup({})
  constructor( private formBuilder: FormBuilder, private _userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'fullName': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'mobile': new FormControl('', [Validators.required, Validators.maxLength(10)]),

    });
  }

  createUser() {
    this._userService.addUsers(this.addUserForm.value).subscribe(data => {
      this._snackBar.open('User created succefully!');
    }, err => {
      this._snackBar.open('Unable to created user!');
    })
  }

}
