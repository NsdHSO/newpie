import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import {
  RouterModule,
  Routes
} from "@angular/router";
import { InductionComponent } from './induction.component';


const routes: Routes = [
  {
    path: '',
    component: InductionComponent
  }
]
@NgModule({
  declarations: [InductionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class InductionModule {}
