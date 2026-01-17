import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BasicsComponent } from './basics/basics.component';
import { InteractComponent } from './interact/interact.component';
import { InteractionComponent } from './interaction/interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BasicsComponent,
    InteractComponent,
    InteractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
