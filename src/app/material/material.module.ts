import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

//Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  imports:  [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule,
    MatMenuModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule,
    MatMenuModule,
    MatSlideToggleModule,
  ]
})

export class MaterialModule {}
