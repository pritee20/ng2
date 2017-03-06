import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CoursesComponent} from './courses/courses.component';
import {AuthorComponent} from './authors/author.component';
import {ContactFormComponent} from './contactForm/contact-form.component';

const appRouts: Routes = [
	  { path: '', component: CoursesComponent, useAsDefault: true},
	  { path: 'authors',  component: AuthorComponent },
	  {path: 'contact',  component: ContactFormComponent},
	  {path: '**', component:CoursesComponent}
]

export const AppRouting:  ModuleWithProviders = RouterModule.forRoot(appRouts);