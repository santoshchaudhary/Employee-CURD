import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  viewUsers: any;
  userId: any;
  userDetails: any;
  constructor(private _userService: UserService, private activatedRouter: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(data => {
      this.userId = data.id;
    })
    this._userService.viewUsers(this.userId).subscribe(data => {
      this.userDetails = data;
    })
  }

}
