import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DocWorkspaceComponent } from './component/doc-workspace/doc-workspace.component';


const routes: Routes = [ 
{ path: '', component: HomeComponent },
{ path: 'foo', component: DocWorkspaceComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
