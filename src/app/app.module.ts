import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';





import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { SharedModule } from './shared/shared.module'
import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//Inicio services libraries
import { DownloadLibrariesService } from './services/downloadLibraries.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  providers: [
    DownloadLibrariesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
