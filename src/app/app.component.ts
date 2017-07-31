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

    states = [
    { code: 'AL', name: 'Alabama'},
    { code: 'BL', name: 'Bangalore'},
    { code: 'MU', name: 'Mumbai'},
    { code: 'GU', name: 'Gujrat'}
  ];

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
            styles : {
              backgroundColor : 'green'
            },
            items : [{
              type : 'textfield',
              label : 'First Name',
              placeholder : 'Enter First Name',
              value : 'Ram'
            },{
              type : 'textfield',
              label : 'Middle Name',
              placeholder : 'Enter Middle Name',
              value : 'Narayan'
            },{
              type : 'combofield',
              placeholder : 'Enter Country',
              data : this.states,
              display : 'name',
              value : 'code'
            }]
      		}]
    	}]
    }


}
