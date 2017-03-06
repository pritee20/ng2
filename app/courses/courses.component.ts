import {Component} from '@angular/core';

import {CoursesService} from './courses.service';
import {RatingComponent} from './rating/rating.component';
import {EllipsesPipe} from './../ellipses.pipe';

@Component({
	selector: 'courses',
	templateUrl: 'app/courses/courses.template.html',
	pipes: [EllipsesPipe],
	providers: [CoursesService]
})
export class CoursesComponent{
	title = "The title of the courses page.";
	courses;
	constructor(coursesService: CoursesService){
		this.courses = coursesService.getCourses();
	};
	post = {
		title: 'Course Rating',
		rating: true,
		ratingNum: 11,
		body: `
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
		`
	};

	onChangeRating(event){
		console.log(event);

	}
}