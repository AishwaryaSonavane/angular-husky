import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { SkipTestComponent } from './skip-test/skip-test.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    SkipTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
