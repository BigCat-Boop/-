import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagNewComponent } from './tag-new/tag-new.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { LayoutComponent } from './layout/layout.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { AuthGuard } from './auth_guards.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
   path: 'contact',
   component: LayoutComponent,
   canActivate: [AuthGuard],
   children: [
     {
       path: '',
       component: ContactListComponent
     },
     {
      path: 'new',
      component: ContactNewComponent
    },
    {
      path: 'edit/:id',
      component: ContactEditComponent
    }
  ]
  },
    {
      path: 'tag',
      component: LayoutComponent,
      children: [
        {
          path: '',
          component: TagListComponent
        },
        {
         path: 'new',
         component: TagNewComponent
       },
    {
      path: 'edit',
      component: TagEditComponent
    },
   ] 
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
