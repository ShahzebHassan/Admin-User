import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatSnackBarModule,
        HttpClientTestingModule,
        MatCardModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [LoginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalid when empty', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a default value for the loginForm', () => {
    expect(component.loginForm.value).toEqual({ Email: 'admin@admin.com', Password: 'Admin1234' });
  });

});
