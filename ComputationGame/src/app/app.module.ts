import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EquationFormComponent } from './equation-form/equation-form.component';
import { AnswerHighlightDirective } from './answer-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    EquationFormComponent,
    AnswerHighlightDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
