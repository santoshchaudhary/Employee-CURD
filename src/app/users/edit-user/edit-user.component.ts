import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId:any;
  userDetails: any;
  dataLoaded: boolean = false;
  editUserForm: FormGroup = new FormGroup({});
  constructor(private ActivatedRoute: ActivatedRoute, private _userService: UserService, private FormBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.ActivatedRoute.params.subscribe(data => {
      this.userId = data.id;
    });

    if(this.userId !== '') {
      // view details
      this._userService.viewUsers(this.userId).toPromise().then(data => {
        this.userDetails = data;
        Object.assign(this.userDetails, data);
        console.log(this.userDetails);


        // edit form
        this.editUserForm = this.FormBuilder.group({
          'fullName': new FormControl(this.userDetails.fullName),
          'email': new FormControl(this.userDetails.email),
        })
        this.dataLoaded = true;
        //console.log(this.userDetails);
      }).catch(err => {
        console.log(err);
      })
    }

  }

  updateUser(){
    //console.log(this.editUserForm.value);
    this._userService.updateUser(this.userId, this.editUserForm.value).subscribe(data => {
      this._snackBar.open('User updated succefully!');
      this.router.navigate(['/users/list'])
    }, err => {
      this._snackBar.open('Unable to update user!');
    })
  }

}
