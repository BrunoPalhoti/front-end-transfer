import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateComponent } from './rate/rate.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';

const routes: Routes = [
  {path: '', redirectTo: 'rate', pathMatch: 'full'},
  {path: 'rate', component: RateComponent},
  {path: 'new-transfer', component: NewTransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
