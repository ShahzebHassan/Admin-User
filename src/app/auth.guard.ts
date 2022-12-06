
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router, } from '@angular/router';
import { AuthService } from './shared/auth.service';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService, private _snackBar: MatSnackBar) { }
    canActivate() {
        if (this.auth.isAuthorized()) {
            return true;
        } else
            this._snackBar.open("Please login first", "", {
                duration: 2000,
            });
        this.router.navigate(['login']);
        return false;
    }
}
