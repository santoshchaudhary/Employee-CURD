import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  userId:any = '';
  constructor(private _userService: UserService, private activateRoute: ActivatedRoute, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.userId = data.id;
    });
    if(this.userId) {
      this._userService.deleteUser(this.userId).subscribe(data => {
        this._snackBar.open('User deleted succefully!');
        this.router.navigate(['/users/list'])
      }, err => {
        this._snackBar.open('Unable to delete user!');
      })
    }
  }

}
