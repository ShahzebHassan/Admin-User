import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';

import { UserTableRoutingModule } from './user-table-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserTableRoutingModule,
    NgxPermissionsModule.forRoot()
  ]
})
export class UserTableModule { }
