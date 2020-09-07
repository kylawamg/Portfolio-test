import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { ProjectsModule } from './features/projects/projects.module'

//Components
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {
    path: 'projects',
    loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule),
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
