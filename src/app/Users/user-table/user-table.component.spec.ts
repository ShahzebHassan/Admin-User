import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { UserTableComponent } from './user-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTableModule,
        MatPaginatorModule
      ],
      declarations: [UserTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the getAllInfo method', () => {
    spyOn(component, 'getAllInfo');
    component.getAllInfo();
    expect(component.getAllInfo).toHaveBeenCalled();
  });
  it('should call the editUserInfo function', () => {
    let row: any;
    spyOn(component, 'editUserInfo');
    component.editUserInfo(row);
    expect(component.editUserInfo).toHaveBeenCalled();
  });
});
