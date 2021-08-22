import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttachmentsComponent } from './attachments/attachments.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';

const routes: Routes = [
  { path: 'personal',  component: PersonalComponent},
{ path: 'professional', component: ProfessionalComponent },
{ path: 'attachments', component: AttachmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
