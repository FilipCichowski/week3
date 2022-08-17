import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display-user-info-dialog',
  templateUrl: './display-user-info-dialog.component.html',
  styleUrls: ['./display-user-info-dialog.component.css'],
})
export class DisplayUserInfoDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { rowData: any }) {}

  ngOnInit(): void {}
}
