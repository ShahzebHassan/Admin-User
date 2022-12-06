import { OnInit, Component, ViewChild, ChangeDetectionStrategy, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../services/api.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Role } from 'src/app/models/role';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Username', 'Email', 'Address', 'Role', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private authService: AuthService, private dialog: MatDialog, private Api: ApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllInfo();
  }
  get isAdmin() {
    return this.authService.hasRole(Role.Admin);
  }
  openUserDialog() {
    this.dialog.open(UserDialogComponent, {
      width: '30%'
      //  Renderdata without resfreshing Table?
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllInfo();
      }
    })
  }
  getAllInfo() {
    this.Api.getUserInfo()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (_err) => {
          this._snackBar.open("Error While Fetching", "", {
            duration: 2000,
          });
        }
      })
  }
  editUserInfo(row: any) {
    this.dialog.open(UserDialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllInfo();
      }
    })
  }
  deleteProduct(_id: number) {
    if (confirm("Are you sure to delete " + _id)) {
      this.Api.deleteUserInfo(_id)
        .subscribe({
          next: (res) => {
            this._snackBar.open("Deleted Successfully", "", {
              duration: 2000,
            });
            this.getAllInfo();
          },
          error: () => {
            this._snackBar.open("Error While Deleting", "", {
              duration: 2000,
            });
          }
        })
    }
  }

}