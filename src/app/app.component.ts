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



    	metadata ={

        items : [{

      		type: 'container',
      		layout :{
            fxLayout : 'column',
            fxLayoutAlign : 'center center',
            fxFlex : 30
          },
          styles : {
            backgroundColor : 'yellow',
            border : '1px solid grey'
          },
      		items : [{
    				type : 'container',
            layout :{
              fxFlex : '1'
            },
            styles : {
              backgroundColor : 'orange',
              border : '1px solid yellow'
            }
      		},{
      			type : 'container',
            styles : {
              backgroundColor : 'red',
              border : '1px solid brown'
            }
      		},{
      			type : 'container',
            items : [{
              type : 'container'
            },{
              type : 'container'
            },{
              type : 'container'
            }]
      		}]
    	}]
    }


}
