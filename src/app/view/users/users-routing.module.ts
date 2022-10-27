import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetuserComponent } from './components/getuser/getuser.component';

const routes: Routes = [
  {
    path: '',
    component: GetuserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
