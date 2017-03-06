import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'rating',
	templateUrl: 'app/rating/rating.template.html',
	styleUrls:['app/app.component.css'],
	//inputs: [ratingIcon:is-favorite] // other way to define input api and call alias "is-favorite"
})

export class RatingComponent{
	@Input('is-favorite') ratingIcon: boolean = true;
	@Output() change = new EventEmitter();
	@Input() ratingNum = 0;

	onClick(){
		this.ratingIcon = !this.ratingIcon;
		this.ratingNum += this.ratingIcon ? 1: -1;

		this.change.emit({newValue: this.ratingIcon});
	}


}


