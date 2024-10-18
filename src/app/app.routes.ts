import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthorizationComponent } from "./pages/authorization/authorization.component";
import {RegistrationComponent} from "./pages/registration/registration.component";

export const routes: Routes = [
  { path: 'authorization', component: AuthorizationComponent},
  { path: 'reg', component: RegistrationComponent},
  { path: '', redirectTo: '/authorization', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
