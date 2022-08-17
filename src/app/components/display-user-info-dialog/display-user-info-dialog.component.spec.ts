import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserInfoDialogComponent } from './display-user-info-dialog.component';

describe('DisplayUserInfoDialogComponent', () => {
  let component: DisplayUserInfoDialogComponent;
  let fixture: ComponentFixture<DisplayUserInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayUserInfoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayUserInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
