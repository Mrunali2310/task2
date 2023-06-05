import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagsComponent }from  './bags/bags.component';

const routes: Routes = [
  { 
    component:BagsComponent,
    path:'bags'
  },
  { 
    component:BagsComponent,
    path:'1'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
