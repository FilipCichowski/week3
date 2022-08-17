import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  usersUrl = 'https://ghibliapi.herokuapp.com/people';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  constructor(private http: HttpClient) {}
}
