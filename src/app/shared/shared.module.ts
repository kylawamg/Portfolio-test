import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CoverComponent } from './components/cover/cover.component'
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component'

//Material
import { MaterialModule } from '../material/material.module';

//FontAwesome icons
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStackOverflow, faGithub, faMedium, faInstagram, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelope } from '@fortawesome/free-regular-svg-icons';

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
    FontAwesomeModule
  ],
  exports:  [
    HeaderComponent,
    CoverComponent,
  ]
})
export class SharedModule {
  constructor( private library: FaIconLibrary ){
    library.addIcons(faStackOverflow, faGithub, faMedium, faInstagram, faInstagramSquare, faLinkedin, faEnvelope );
  }
}
