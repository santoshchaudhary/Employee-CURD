import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/list/list.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: any = 'https://retoolapi.dev/iM9Vc5/';
  constructor(private http: HttpClient) { }

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'employees')
  }

  viewUsers(id:string) {
    return this.http.get(this.baseUrl + 'employees/' + id)
  }

  addUsers(userObj: any) {
    return this.http.post(this.baseUrl + 'employees', userObj)
  }

  deleteUser(id: any) {
    return this.http.delete(this.baseUrl + 'employees/' + id)
  }

  updateUser(id:any, userObj: any) {
    return this.http.put(this.baseUrl + 'employees/' + id, userObj)
  }

}
