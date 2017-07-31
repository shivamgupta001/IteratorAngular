import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { CombofieldComponent } from './combofield/combofield.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxfieldComponent } from './checkboxfield/checkboxfield.component';
import { RadioComponent } from './radio/radio.component';
import { RadiofieldComponent } from './radiofield/radiofield.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TextfieldComponent,
    CombofieldComponent,
    CheckboxComponent,
    CheckboxfieldComponent,
    RadioComponent,
    RadiofieldComponent,
    FormComponent
  ],
  imports: [

    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
