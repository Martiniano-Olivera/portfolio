import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './feature-modules/about-me/about-me.component';
import { ContactComponent } from './feature-modules/contact/contact.component';
import { HomeComponent } from './feature-modules/home/home.component';
import { ProjectsComponent } from './feature-modules/projects/projects.component';

const routes: Routes = [
  { path: 'home',     component: HomeComponent,     pathMatch: 'full' },
  { path: 'contact',  component: ContactComponent,  pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent,  pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
