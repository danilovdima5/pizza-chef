import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InputNoDotsModule } from './input-no-dots/inputs-no-dots.module';
import { ZoomInPicModule } from './zoom-in-pic/zoom-in-pic.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    InputNoDotsModule,
    ZoomInPicModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
