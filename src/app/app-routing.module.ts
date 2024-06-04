import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mfe1Com1Component } from './mfe1-com1/mfe1-com1.component';
import { Mfe1Com2Component } from './mfe1-com2/mfe1-com2.component';

const routes: Routes = [
  {
    path: 'mfe1-com1',
    component: Mfe1Com1Component,
  },
  {
    path: 'mfe1-com2',
    component: Mfe1Com2Component,
  },
  {
    path: '**',
    redirectTo: 'mfe1-com1',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
