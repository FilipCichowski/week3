import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserDataService } from '../../services/user-data.service';
import { catchError, combineLatestWith, Observable, of, Subscription } from "rxjs";
import { User } from '../../interfaces/user-interface';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayUserInfoDialogComponent } from '../../components/display-user-info-dialog/display-user-info-dialog.component';
import { DisplayUserInfoService } from '../../services/display-user-info.service';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  result$!: Observable<[User[], Params] | never[]>;
  resultSubscription!: Subscription
  data!: User[];
  displayedColumns: string[] = ['name', 'gender', 'age'];

  dataSource!: MatTableDataSource<User[]>;

  highlight(row: any, evt: any) {
    this.displayUserInfoService.addUserIdToURL(row.id);
    this.displayUserInfoService.openUserInfoDialog(row);

  }

  constructor(
    private userService: UserDataService,
    private displayUserInfoService: DisplayUserInfoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.result$ = this.userService.getUsers().pipe(
      combineLatestWith(this.activatedRoute.queryParams),
      catchError((err) => {
        console.error(err);
        return of([]);
      })
    );
    this.resultSubscription = this.result$.subscribe(([res, par]) => {
      this.data = res;
      this.dataSource = new MatTableDataSource<any>(this.data);
      if (par["id"] !== undefined) {
        this.displayUserInfoService.openUserInfoDialog(this.data.find(e => e.id === par["id"]))
      }
    });
  }

  ngOnDestroy() {
    this.resultSubscription.unsubscribe();
  }
}
