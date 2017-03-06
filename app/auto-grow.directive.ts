import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
	selector: '[autoGrow]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur()'
	}
})
export class AutoGrowDirective{
	constructor(private el: ElementRef, private renderer: Renderer){

	}

	onFocus(){
		
		this.renderer.setElementStyle(this.el.nativeElement,'background', '#e6e6e6');
	}
	onBlur(){
		this.renderer.setElementStyle(this.el.nativeElement,'background', '#b4bcc2');
	}
}
