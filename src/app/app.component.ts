import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    handleInput(){
      console.log("input fired");
    }

  	metadata = [{
  		type: 'container',
  		class : 'fit',
  		layout : 'row',
  		flex : 1,
  		items : [{
				type : 'container',
				flex : 1,
        layout : 'column',
				items : [{
  					type : 'textfield',
            listeners : {
              input : this.handleInput
            }
  				},{
  					type : 'textfield'
  				},{
  					type : 'textfield'
  			}]  			
  		},{
  			type : 'container',
  			flex : 1,
  			layout : 'column',
  			items : [{
	  				type : 'container',
	  				flex : 1
	  			},{
	  				type : 'container',
	  				flex : 2
	  			},{
	  				type : 'container',
	  				flex  : 1
	  			}]
  		},{
  			type : 'container',
  			flex : 1,
  			layout : 'row'
  		}]
  	}]
}
