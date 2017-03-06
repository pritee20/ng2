import { Component, Input } from '@angular/core';
import {User} from '../shared/model/user';
import {AutoGrowDirective} from '../auto-grow.directive';

@Component({
	selector: 'user-profile',
	templateUrl:'app/users/user-profile.template.html',
	directives: [AutoGrowDirective]
	
})
export class UserProfileComponent {
	welcomeMsg: string = "Welcome to Our App!";
	@Input() user: User;

}