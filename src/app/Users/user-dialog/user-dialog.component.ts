import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  roles: any[] = [
    { name: 'Admin' },
    { name: 'User' },
  ];
  informationForm !: FormGroup;
  actionBtn: string = "Save"
  constructor(private formBuilder: FormBuilder, private api: ApiService, private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialRef: MatDialogRef<UserDialogComponent>) { }

  ngOnInit(): void {
    this.informationForm = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,4}$")]],
      Address: ['', [Validators.required, Validators.maxLength(20)]],
      Password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
      Role: ['', Validators.required]
    })
    if (this.editData) {
      this.actionBtn = "Update";
      this.informationForm.controls['Username'].setValue(this.editData.Username);
      this.informationForm.controls['Email'].setValue(this.editData.Email);
      this.informationForm.controls['Address'].setValue(this.editData.Address);
      this.informationForm.controls['Password'].setValue(this.editData.Password);
      this.informationForm.controls['Role'].setValue(this.editData.Role);
    }
  }
  addData() {
    if (!this.editData) {
      if (this.informationForm.valid) {
        this.api.postUserInfo(this.informationForm.value)
          .subscribe({
            next: () => {
              this._snackBar.open("Info Added Successfully", "", {
                duration: 2000,
              });
              this.dialRef.close('save');
              this.informationForm.reset();
            },
            error: () => {
              this._snackBar.open("Error while Adding Info", "", {
                duration: 2000,
              });
            }
          })
      }
    } else {
      this.updateInfo()
    }
  }
  updateInfo() {
    this.api.putUserInfo(this.informationForm.value, this.editData._id)
      .subscribe({
        next: (res) => {
          this._snackBar.open("Updated Successfully", "", {
            duration: 2000,
          });
          this.informationForm.reset();
          this.dialRef.close('update');
        },
        error: () => {
          this._snackBar.open("Error while Updating", "", {
            duration: 2000,
          });
        }
      })
  }
  refresh() {

    throw new Error('Method not implemented.');
  }
}