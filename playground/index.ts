/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MessengerModule }  from 'ngx-messenger';

@Component({
  selector: 'app',
  template: `<msg-chat-box></msg-chat-box>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, MessengerModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
