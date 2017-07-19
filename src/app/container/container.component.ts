import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tf-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

	@Input() metadata : {};

  	constructor() { }

  	ngOnInit() {
  	}

}
