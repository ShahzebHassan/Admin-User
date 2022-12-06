import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { Role } from '../models/role';
import { ApiService } from '../services/api.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  constructor(
    public authService: AuthService,
    private api: ApiService,
    private formBuilder: FormBuilder,
    public router: Router,
    private _snackBar: MatSnackBar,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['admin@admin.com', [Validators.required,]],
      Password: ['Admin1234', Validators.required,]
    })
  }
  login() {
    this.api.login()
      .subscribe({
        next: (res) => {
          const admin = res.find((a: any) => {
            return a.Email === this.loginForm.value.Email && a.Password === this.loginForm.value.Password && a.Role === 'Admin'
          });
          if (admin) {
            this._snackBar.open("logged In", "Admin", {
              duration: 2000,
            });
            this.cookieService.set('Test', 'Hello World');
            this.loginForm.reset();
            this.authService.login(Role.Admin);
            this.router.navigate(['navigation']);
          }
          else {
            const user = res.find((a: any) => {
              return a.Email === this.loginForm.value.Email && a.Password === this.loginForm.value.Password && a.Role === 'User'
            });
            if (user) {
              this._snackBar.open("logged In", "User", {
                duration: 2000,
              });
              this.cookieService.set('Test', 'Hello World');
              this.loginForm.reset();
              this.authService.login(Role.User);
              this.router.navigate(['navigation']);
            } else
              this._snackBar.open("User not Found", "", {
                duration: 2000,
              });
          }
        }, error: (err) => {
          this._snackBar.open("Something Went Wrong", "", {
            duration: 2000,
          });
        }
      })
  }
}

