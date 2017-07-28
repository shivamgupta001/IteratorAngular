import { Component, OnInit, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'tf-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

	@Input() metadata : any;

  	listeners : {};
  	layout : {
  		fxLayout : '',
  		fxLayoutAlign : '',
  		fxLayoutGap : ''
  	};

  	constructor(
  		private elementRef : ElementRef,
  		private renderer : Renderer
  	) { }

	ngOnInit() { 

		this._initialize();
		this._bindEvents();		

	}
	_initialize(){

		this.listeners = this.metadata.listeners;
		this.layout = this.layout;

	}
	_bindEvents(){

		if(this.listeners){
			Object.keys(this.listeners).forEach(function(listener){
				
				this.renderer.listen(this.elementRef.nativeElement, listener , this.listeners[listener]);
				
			}.bind(this));	
		}
	}

}
