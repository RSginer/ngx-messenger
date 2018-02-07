# ngx-messenger
## Demo
<div style="text-align: center">
  <img src="https://rsginer.github.io/ngx-messenger/assets/demo.gif">
</div>

## Installation

To install this library, run:

```bash
$ npm install ngx-messenger --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import MessengerModule
import { MessengerModule } from 'ngx-messenger';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify MessengerModule as an import
    MessengerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once MessengerModule is imported, you can use its components, directives and pipes in your Angular application:

```typescript
// You can now use ngx-messenger in your components

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MessengerModule }  from 'ngx-messenger';

@Component({
  selector: 'app',
  template: `<msg-chat-box
              (onSend)="sendMessage($event)"
              [conversation]="conversation"
              [currentUserId]="currentUserId">
              </msg-chat-box>`
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

```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Ruben Soler](mailto:r.solerginer@gmail.com)
