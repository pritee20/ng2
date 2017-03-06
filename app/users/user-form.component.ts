import {Component, Output, EventEmitter} from '@angular/core';
import {User} from '../shared/model/user';

@Component({
	selector: 'user-form',
	styles: [`
		form{
			padding: 10px;
			background: #ecf0f1;
			border-radius: 3px;
		}
	`],
	templateUrl: 'app/users/user-form.template.html'
})
export class UserFormComponent{
	@Output() userCreated = new EventEmitter();
	newUser: User = new User();
	active: boolean = true;

	onSubmit(){
		//show the event that the user was created
		this.userCreated.emit({user: this.newUser});
		
		this.active = false;
		this.newUser = new User();
		setTimeout(() => this.active = true, 0);

	}
}