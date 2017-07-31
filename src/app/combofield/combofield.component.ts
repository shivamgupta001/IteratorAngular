import { Component, ViewChild, AfterViewInit, Input, ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'tf-combofield',
  templateUrl: './combofield.component.html',
  styleUrls: ['./combofield.component.css']
})
export class CombofieldComponent implements AfterViewInit {

  	@Input() metadata : any;

	@ViewChild("tfCombo") innerComp : ElementRef;

	listeners : {};
	label : '';
	placeholder : '';
	value : '';
	states = [
		{ code: 'AL', name: 'Alabama'},
		{ code: 'BL', name: 'Bangalore'},
		{ code: 'MU', name: 'Mumbai'},
		{ code: 'GU', name: 'Gujrat'}
	];

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
		//debugger;
		//this.innerComp.nativeElement.setAttribute('placeholder',this.placeholder);
		
	}
	_bindEvents(){
		
		Object.keys(this.listeners).forEach(function(listener){
			
			this.renderer.listen(this.elementRef.nativeElement, listener , this.listeners[listener]);
			
		}.bind(this));	
		
	}

}
