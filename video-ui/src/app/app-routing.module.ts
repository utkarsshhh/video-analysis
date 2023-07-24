import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './Components/upload/upload.component';

const routes: Routes = [{path:'upload',component:UploadComponent},{path:'**',redirectTo:'upload'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
