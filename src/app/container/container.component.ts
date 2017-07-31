import { Component, OnInit, Input, ElementRef, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'tf-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

	@Input() 
	metadata : any;
		
	listeners : {};
  	layout : {};
  	styles : {};
  	attributes : {};

  	constructor(
  		private elementRef : ElementRef,
  		private renderer : Renderer
  	) { }

	ngOnInit() { 

		this._initialize();
		
		this._applyProperty();
		this._bindEvents();		

	}
	_initialize(){
		

		let me = this.metadata;

		this.listeners = me.listeners ? me.listeners : {};
		this.layout = me.layout ? me.layout : {};
		this.styles = me.styles ? me.styles : {};
		this.attributes = me.attributes ? me.attributes : {};


	}
	_applyProperty(){

		//adding styles to component
		Object.keys(this.styles).forEach(function(style){

			this.elementRef.nativeElement.style[style] = this.styles[style];

		}.bind(this));

		//adding attributes to component
		Object.keys(this.attributes).forEach(function(attribute){
			
			this.elementRef.nativeElement.setAttribute(attribute , this.attributes[attribute]);			
			
		}.bind(this));
		
	}
	_bindEvents(){

		if(this.listeners){
			Object.keys(this.listeners).forEach(function(listener){
				
				this.renderer.listen(this.elementRef.nativeElement, listener , this.listeners[listener]);
				
			}.bind(this));	
		}
	}

}
