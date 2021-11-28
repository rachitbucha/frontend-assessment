import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';

const routes: Routes = [
  { path: '', component: Part3Component },
  { path: 'part2', component: Part2Component },
  { path: 'part1', component: Part1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
