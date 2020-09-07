import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CoverComponent } from './components/cover/cover.component'
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component'

//Material
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    CoverComponent,
    SlideToggleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports:  [
    HeaderComponent,
    CoverComponent,
  ]
})
export class SharedModule { }
