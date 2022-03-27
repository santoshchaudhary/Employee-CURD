import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


export interface User {
  id:number;
  dob:any;
  email:any;
  gender:string;
  mobile:number;
  address: any;
  company: any;
  fullName:string;
  position:string;
}

const ELEMENT_DATA: User[] = [
  // {id: 1, dob: 'sdfsd', email:'sdfsd@sdfd.com', gender:'sdf', mobile:121212, address: 'sdfds', company: 'sdfsd', fullName:'sdfsd' ,position: 'sdfds'},
 
];




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: any[] = ['id', 'dob', 'fullName', 'email', 'gender', 'mobile', 'address', 'company', 'position', 'action'];
  dataSource = ELEMENT_DATA;
  listUsers: User[] = [];
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
     this._userService.listUsers().subscribe(data => {
      this.listUsers = data;
    });
  }

}
