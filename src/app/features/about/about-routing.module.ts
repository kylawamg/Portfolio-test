import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { SmartAboutComponent } from './smart-about/smart-about.component';

const routes: Routes = [

  {
    path: '',
    component: SmartAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
