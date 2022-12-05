import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'form',component: FormComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
