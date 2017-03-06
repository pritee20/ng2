import { Component } from '@angular/core';
import {User} from './shared/model/user';

import {HeaderComponent} from './header/header.component';
import {CoursesComponent} from './courses/courses.component';
import {AuthorComponent} from './authors/author.component';
import {BootstrapPannel} from './accordion/accordion.component';
import {ContactFormComponent} from './contactForm/contact-form.component';



@Component({
  	selector: 'my-app',
  	templateUrl: 'app/app.template.html',
  	directives: [HeaderComponent, CoursesComponent, AuthorComponent, BootstrapPannel, ContactFormComponent],
	styleUrls:['./app/app.component.css']
})
export class AppComponent {
	users: User[] = [
		{id: "31",name: "Pritee",username: "ptanwa"},
	 	{id: "32",name: "Nick",username: "nkjoe"},
	 	{id: "33",name: "Holly",username: "hollystandy"}
	 	];
	activeUser: User;
	selectUser(user){
		this.activeUser = user;
		//console.log(this.activeUser);
	};
	onUserCreated(event){
		this.users.push(event.user);
		//console.log(event);
	}

}