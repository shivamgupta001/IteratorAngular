import { Component, ViewChild, AfterViewInit, Input, ElementRef, Renderer } from '@angular/core';
import { MdInputModule } from '@angular/material';

@Component({
  selector: 'tf-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements AfterViewInit {

	@Input() metadata : any;

	@ViewChild("tfTextfield") innerComp : ElementRef;

	listeners : {};
	label : '';
	placeholder : '';
	value : '';

  	constructor(
  		private elementRef : ElementRef,
  		private renderer : Renderer
  	) { }

	ngAfterViewInit(){ 

		this._initialize();
		this._applyProperty();
		this._bindEvents();		

	}
	_initialize(){
		
		var me = this.metadata;

		this.listeners = me.listeners ? me.listeners : {};
		this.label = me.label ? me.label : '';
		this.placeholder = me.placeholder ? me.placeholder : '';
		this.value = me.value ? me.value : '';

	}
	_applyProperty(){
		
		this.innerComp.nativeElement.setAttribute('placeholder',this.placeholder);
		this.innerComp.nativeElement.setAttribute('value',this.value);
	}
	_bindEvents(){
		
		Object.keys(this.listeners).forEach(function(listener){
			
			this.renderer.listen(this.elementRef.nativeElement, listener , this.listeners[listener]);
			
		}.bind(this));	
		
	}

}
