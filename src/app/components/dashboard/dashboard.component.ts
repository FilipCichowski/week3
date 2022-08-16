import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../user-data.service';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../../user-interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  result$!: Observable<User[]>;
  data!: User[];
  displayedColumns: string[] = ['name', 'gender', 'age'];

  dataSource!: MatTableDataSource<User[]>;

  constructor(private userService: UserDataService) {}

  ngOnInit(): void {
    this.result$ = this.userService.getUsers().pipe(
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
    this.result$.subscribe((res) => {
      this.data = res;
      this.dataSource = new MatTableDataSource<any>(this.data);
    });
  }
}
