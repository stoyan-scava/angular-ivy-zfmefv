import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmailFormComponent } from './email-form.component';

@NgModule({
  imports: [BrowserModule, EmailFormComponent],
  declarations: [AppComponent, EmailFormComponent],
  bootstrap: [AppComponent, EmailFormComponent],
})
export class AppModule {}
