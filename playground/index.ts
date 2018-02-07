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
  template: `<div id="container"><msg-chat-box
              (onSend)="sendMessage($event)"
              [isFullScreen]="true"
              [conversation]="conversation"
              [currentUserId]="currentUserId">
              </msg-chat-box></div>`
})
class AppComponent {
  currentUserId = 1;
  conversation = [
    {
      text: 'Hello good morning',
      date: new Date(),
      user: {
        id: 2,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Paco'
      }
    },
    {
      text: 'Hi!',
      date: new Date(),
      user: {
        id: 1,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben'
      }
    },
    {
      text: 'Hello good morning',
      date: new Date(),
      user: {
        id: 2,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Paco'
      }
    },
    {
      text: 'Hi!',
      date: new Date(),
      user: {
        id: 1,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben'
      }
    },
    {
      text: 'Hello good morning',
      date: new Date(),
      user: {
        id: 2,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Paco'
      }
    },
    {
      text: 'Hi!',
      date: new Date(),
      user: {
        id: 1,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben'
      }
    }
  ]

  sendMessage(text) {
    this.conversation.push({
      text: text,
      date: new Date(),
      user: {
        id: this.currentUserId,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben'
      }
    })
  }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, MessengerModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
