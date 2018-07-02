import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement }  from '@angular/elements';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  entryComponents: [ AppComponent ]
})
export class AppModule { 
  ngDoBootstrap() { }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(({ injector }) => {
    const AppElement = createCustomElement(AppComponent, { injector: injector });
    customElements.define('app-root', AppElement);
  });

