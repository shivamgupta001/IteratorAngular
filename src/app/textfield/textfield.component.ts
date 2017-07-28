import { Component, OnInit, Input, ElementRef, Renderer } from '@angular/core';
import { MdInputModule } from '@angular/material';

@Component({
  selector: 'tf-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {

	@Input() metadata : any;

	listeners : {};

  	constructor(
  		private elementRef : ElementRef,
  		private renderer : Renderer
  	) { }

	ngOnInit() { 

		this._initialize();
		this._bindEvents();		

	}
	_initialize(){
		debugger;
		this.listeners = this.metadata.listeners;

	}
	_bindEvents(){

		if(this.listeners){
			Object.keys(this.listeners).forEach(function(listener){
				
				this.renderer.listen(this.elementRef.nativeElement, listener , this.listeners[listener]);
				
			}.bind(this));	
		}
	}

}
