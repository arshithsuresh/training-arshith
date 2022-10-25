import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignPageComponent } from './design-page/design-page.component';

const routes: Routes = [
  {
    path:'',
    component: DesignPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
