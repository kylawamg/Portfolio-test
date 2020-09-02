import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

//Material
import { MaterialModule } from '../material/material.module';
import { CoverComponent } from './components/cover/cover.component'
@NgModule({
  declarations: [
    HeaderComponent,
    CoverComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  exports:  [
    HeaderComponent,
    CoverComponent
  ]
})
export class SharedModule { }
