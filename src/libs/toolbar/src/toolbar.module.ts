import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { ToolbarComponent } from './toolbar.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ToolbarComponent ],
  exports: [ ToolbarComponent ],
  entryComponents: [ ToolbarComponent ]
})
export class ToolbarModule { 
  ngDoBootstrap() { }
}

platformBrowserDynamic()
  .bootstrapModule(ToolbarModule)
  .then(({ injector }) => {
    const ToolbarElement = createCustomElement(ToolbarComponent, { injector: injector });
    customElements.define('tool-bar', ToolbarElement);
  })