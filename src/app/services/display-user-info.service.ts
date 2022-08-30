import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { DisplayUserInfoDialogComponent } from '../components/display-user-info-dialog/display-user-info-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DisplayUserInfoService {
  // openUserInfoDialog(rowData: any) {
  //   let dialogRef = this.dialog.open(DisplayUserInfoDialogComponent, {
  //     height: '300px',
  //     width: '300px',
  //     data: { rowData: rowData },
  //   });
  //   this.addUserIdToURL(rowData.id);
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.addUserIdToURL(null);
  //   });
  // }

  openUserInfoDialog(rowData: any) {
    let dialogRef = this.dialog.open(DisplayUserInfoDialogComponent, {
      height: '300px',
      width: '300px',
      data: { rowData: rowData },
    });
    // this.addUserIdToURL(rowData.id);
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.addUserIdToURL(null);
    // });
  }

  addUserIdToURL(userId: string | null) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        id: userId,
      },
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
