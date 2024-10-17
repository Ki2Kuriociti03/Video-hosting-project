import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorizationComponent } from "./pages/authorization/authorization.component";

export const routes: Routes = [
  { path: 'authorization', component: AuthorizationComponent},
  { path: '', redirectTo: '/authorization', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
