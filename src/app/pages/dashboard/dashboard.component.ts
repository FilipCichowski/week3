import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserDataService } from '../../services/user-data.service';
import { catchError, Observable, of, Subscription } from "rxjs";
import { User } from '../../interfaces/user-interface';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayUserInfoDialogComponent } from '../../components/display-user-info-dialog/display-user-info-dialog.component';
import { DisplayUserInfoService } from '../../services/display-user-info.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  result$!: Observable<User[]>;
  resultSubscription!: Subscription
  data!: User[];
  displayedColumns: string[] = ['name', 'gender', 'age'];

  dataSource!: MatTableDataSource<User[]>;

  highlight(row: any, evt: any) {
    //console.log(evt, row);
    this.displayUserInfoService.openUserInfoDialog(row);
    this.displayUserInfoService.addUserIdToURL(row.id);
  }

  constructor(
    private userService: UserDataService,
    private displayUserInfoService: DisplayUserInfoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.result$ = this.userService.getUsers().pipe(
      catchError((err) => {
        console.error(err);
        return of([]);
      })
    );
    this.resultSubscription = this.result$.subscribe((res) => {
      this.data = res;
      this.dataSource = new MatTableDataSource<any>(this.data);
    });

    // this.activatedRoute.params.subscribe((params) => console.log(params));
    // this.router.events.subscribe(e => console.table(e));
  }

  ngOnDestroy() {
    this.resultSubscription.unsubscribe();
  }
}
