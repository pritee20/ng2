import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'vote',
	templateUrl: 'app/vote/vote-template.html',
	styles: [`
		.active{
			color: #ab00ff;
		}
		.pointer{
			cursor: pointer;
		}
	`]
})

export class VoteComponent{
	@Input() voteCount = 0;
	@Input() myVote = 0;
	@Input() isActive = false;
	@Output() voteChange = new EventEmitter();
	onVoteUp(){
		if(this.myVote === 1){
			return this.myVote;
		}
		this.myVote++;
		this.voteChange.emit({myVote: this.myVote});

			

		
	};
	onVoteDown(){
		if(this.myVote === -1){
			return this.myVote;
		}
		this.myVote--;
		this.voteChange.emit({myVote: this.myVote});
	}
}