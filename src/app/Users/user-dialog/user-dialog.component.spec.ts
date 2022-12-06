import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDialogComponent } from './user-dialog.component';

describe('UserDialogComponent', () => {
  let component: UserDialogComponent;
  let fixture: ComponentFixture<UserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [UserDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be invalid when empty', () => {
    component.informationForm.controls['Username'].setValue('');
    component.informationForm.controls['Email'].setValue('');
    component.informationForm.controls['Address'].setValue('');
    component.informationForm.controls['Password'].setValue('');
    component.informationForm.controls['Role'].setValue('');
    expect(component.informationForm.valid).toBeFalsy();
  });
  it('should be valid when having correct values', () => {
    component.informationForm.controls['Username'].setValue('Qwerty');
    component.informationForm.controls['Email'].setValue('as@gmail.com');
    component.informationForm.controls['Address'].setValue('lahore');
    component.informationForm.controls['Password'].setValue('Ab123456');
    component.informationForm.controls['Role'].setValue('User');
    expect(component.informationForm.valid).toBeTruthy();
  });
  it('should call the addData function', () => {
    spyOn(component, 'addData');                   //spyon:useful when you want to watch (spy) on the function call and can execute the original implementation as per need.
    component.addData();
    expect(component.addData).toHaveBeenCalled();
  });
  it('should call the updateInfo function', () => {
    spyOn(component, 'updateInfo');
    component.updateInfo();
    expect(component.updateInfo).toHaveBeenCalled();
  });
});
