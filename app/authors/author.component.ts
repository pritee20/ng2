import {Component} from '@angular/core';
import {AuthorService} from './author.services';
import {VoteComponent} from '../vote/vote.component';

@Component({
	selector: 'author',
	templateUrl: './app/authors/author.component.html',
	providers: [AuthorService],
	directives: [VoteComponent]
})
export class AuthorComponent{
	title =  'Authors';
	paragrph = 'This is author page.';
	authors;
	constructor(authorService: AuthorService){
		this.authors = authorService.getAuthor();
	}
	voter = {
		voteCount: 10,
		myVote: 0
	}
	newVote($event){

	}
	
}