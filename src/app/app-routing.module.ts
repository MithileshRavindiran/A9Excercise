import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs/blogs.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  {path:'', 
  redirectTo:'blogs',
  pathMatch:'full'
},
{
  path: 'blogs', 
  component:BlogsComponent
},
{
  path: 'archive/:year/:month', 
  component:ArchiveComponent
},
{
  path:'**',
  component:NotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
