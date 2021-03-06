import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';





import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { SharedModule } from './shared/shared.module'
import { MaterialModule } from './material/material.module';
import { ProjectsModule } from './features/projects/projects.module';
//Inicio services libraries



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
    ProjectsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
