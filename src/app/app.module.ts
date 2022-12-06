import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatHeaderCell, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { UserDialogComponent } from './Users/user-dialog/user-dialog.component';
import { UserTableComponent } from './Users/user-table/user-table.component';
import { AuthService } from './shared/auth.service';
import { RouterModule } from '@angular/router';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserTableComponent,
    LoginComponent,
    UserDialogComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
