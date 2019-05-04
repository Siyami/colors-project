import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListColorsComponent } from './components/list-colors/list-colors.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: 'list', component: ListColorsComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
