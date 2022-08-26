import { CommonModule } from '@angular/common';
import { NgModule }     from '@angular/core';
import {
  RouterModule,
  Routes
}                       from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./induction/induction.module').then(m => m.InductionModule)
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
