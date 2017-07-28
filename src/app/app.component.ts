import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    handleInput(e){
      console.log("input fired",e);
    }

  	metadata = [{
  		type: 'container',
  		layout :{
        fxLayout : 'column',
        fxLayoutAlign : 'center center'
      },
  		items : [{
				type : 'container',
        layout :{
          fxFlex : '1'
        }
  		},{
  			type : 'container'
  		},{
  			type : 'container'
  		}]
  	}]
}
