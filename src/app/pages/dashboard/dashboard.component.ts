import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../../interfaces/user-interface';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayUserInfoDialogComponent } from '../../components/display-user-info-dialog/display-user-info-dialog.component';
import { DisplayUserInfoService } from '../../services/display-user-info.service';

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

  highlight(row: any, evt: any) {
    console.log(evt, row);
    this.displauUserInfoService.openUserInfoDialog(row);
    this.displauUserInfoService.addUserIdToURL(row.id);
  }

  constructor(
    private userService: UserDataService,
    private displauUserInfoService: DisplayUserInfoService
  ) {}

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
