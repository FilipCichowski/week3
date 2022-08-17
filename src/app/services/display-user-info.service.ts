import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DisplayUserInfoDialogComponent } from '../components/display-user-info-dialog/display-user-info-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DisplayUserInfoService {
  openUserInfoDialog(rowData: any) {
    let dialogRef = this.dialog.open(DisplayUserInfoDialogComponent, {
      height: '300px',
      width: '300px',
      data: { rowData: rowData },
    });
  }

  constructor(private dialog: MatDialog) {}
}
