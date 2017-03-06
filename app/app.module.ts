import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import{HeaderComponent} from './header/header.component';
import {UserProfileComponent} from './users/user-profile.component';
import {UserFormComponent} from './users/user-form.component';
import {CoursesComponent} from './courses/courses.component';
import {AuthorComponent} from './authors/author.component';
import {AutoGrowDirective} from './auto-grow.directive';
import {RatingComponent} from './rating/rating.component';
import {VoteComponent} from './vote/vote.component';
import {EllipsesPipe} from './ellipses.pipe';
import {BootstrapPannel} from './accordion/accordion.component';
import {ContactFormComponent} from './contactForm/contact-form.component';




@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    AppRouting
   ],
  declarations: [ 
    HeaderComponent,
  	AppComponent,
  	UserProfileComponent,
  	UserFormComponent,
    CoursesComponent,
    AuthorComponent,
    AutoGrowDirective,
    RatingComponent,
    VoteComponent,
    EllipsesPipe,
    BootstrapPannel,
    ContactFormComponent
   ],
  bootstrap: [ AppComponent]
})
export class AppModule {}