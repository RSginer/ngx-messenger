# ngx-messenger

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

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<msg-chat-box></msg-chat-box>
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
