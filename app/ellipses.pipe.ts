import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'ellipses'
})
export class EllipsesPipe implements PipeTransform{
	transform(value: string, args: string[]){
		var limit = (args && args[0]) ? parseInt(args[0]) : 300;
		if(value){
			return value.substring(0, limit) + '...';
		}
	}
	
}