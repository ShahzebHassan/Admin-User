import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service'
import { Role } from '../models/role';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  toppings = new FormControl();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private authService: AuthService, private cookieService: CookieService, private breakpointObserver: BreakpointObserver, private router: Router, private _snackBar: MatSnackBar,) { }

  ngOnInit(): void { }
  get isUser() {
    return this.authService.hasRole(Role.User);
  }
  get isAdmin() {
    return this.authService.hasRole(Role.Admin);
  }
  logout() {
    if (confirm("Are you sure to logout " + name)) {
      this.cookieService.deleteAll();
      this._snackBar.open("logged Out", "", {
        duration: 2000,
      });
      this.router.navigate(['login']);
    }
  }
}