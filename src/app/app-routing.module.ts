import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from 'src/app/components/authorization/authorization.component';
import { ListDeviceComponent } from 'src/app/components/list-device/list-device.component';

const routes: Routes = [
  { path: "", 
    component: AuthorizationComponent 
  }, 
  {
    path: "list-device",
    component: ListDeviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
