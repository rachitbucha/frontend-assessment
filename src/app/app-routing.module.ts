import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { Part4Component } from './part4/part4.component';
import { Part5Component } from './part5/part5.component';

const routes: Routes = [
  { path: 'part5', component: Part5Component },
  { path: 'part4', component: Part4Component },
  { path: 'part3', component: Part3Component },
  { path: 'part2', component: Part2Component },
  { path: 'part1', component: Part1Component },
  { path: '**', component: Part5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
