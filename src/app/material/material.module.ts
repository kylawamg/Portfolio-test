import { NgModule } from '@angular/core';


//Material
import {MatCardModule,} from '@angular/material/card';
import {MatButtonModule,} from '@angular/material/button';

@NgModule({
  imports:  [
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ]
})

export class MaterialModule {}
