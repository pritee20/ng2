import { Component } from '@angular/core';

import {CoursesComponent} from './courses/courses.component';
import {AuthorComponent} from './authors/author.component';

@Component({
	selector: 'main-header',
	templateUrl: 'app/header/header.template.html',
	styles: [`
		.navbar-default .navbar-nav>li>a.active{
		color: #18bc9c;
		background: #fbfbfb;
	}
	`]
})

export class HeaderComponent{
	
}