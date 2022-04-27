import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { YelloColorDirective } from './yello-color.directive';
import { MyCustomPipePipe } from './my-custom-pipe.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InputFieldComponent,
    YelloColorDirective,
    MyCustomPipePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
