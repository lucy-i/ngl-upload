# ngl-upload

## Installation

To install this library, run:

```bash
$ npm install ngl-upload --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ngl-upload
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NGLUploadModule } from 'ngl-upload';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NGLUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<ngl-upload></ngl-upload>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [lucy@ilucy.in](mailto:lucy@ilucy.in)
"#ngl-upload" 
