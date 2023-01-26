import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteDosComponent } from './components/componente-dos/componente-dos.component';
import { ComponenteUnoComponent } from './components/componente-uno/componente-uno.component';
import { ComponenteDoshijoComponent } from './components/componente-dos/componente-doshijo/componente-doshijo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteDosComponent,
    ComponenteUnoComponent,
    ComponenteDoshijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
