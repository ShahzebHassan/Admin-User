import { Injectable } from '@angular/core';
import { Role } from '../models/role';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  constructor() { }

  isAuthorized() {
    return !!this.user;
  }

  hasRole(role: Role) {
    return this.isAuthorized() && this.user.role === role;
  }

  login(role: Role) {
    this.user = { role: role };
  }
}

