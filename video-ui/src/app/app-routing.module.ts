import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './Components/summary/summary.component';
import { TranscriptComponent } from './Components/transcript/transcript.component';
import { UploadComponent } from './Components/upload/upload.component';

const routes: Routes = [{path:'upload',component:UploadComponent},{path:'transcript',component:TranscriptComponent},{path:'summary',component:SummaryComponent},{path:'**',redirectTo:'upload'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
