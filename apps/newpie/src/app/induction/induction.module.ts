import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InductionComponent } from './induction.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent }   from './components/body/body.component';

const routes: Routes = [
  {
    path: '',
    component: InductionComponent,
  },
];
@NgModule({
  declarations: [InductionComponent, HeaderComponent, BodyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class InductionModule {}
