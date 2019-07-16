import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatRippleModule,
  MatRadioModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import { DEFAULT_GLOBAL_OPTIONS } from './global.config';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatRippleModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatRippleModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [...DEFAULT_GLOBAL_OPTIONS]
})
export class MaterialModule {}
