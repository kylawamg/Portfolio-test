import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Components
import { GridProjectsComponent } from './grid-projects/grid-projects.component';

const routes: Routes = [


  {
    path: '',
    component: GridProjectsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
