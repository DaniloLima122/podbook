import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from '@components/footer/footer.module';
import { MenuModule } from '@components/menu/menu.module';
import { HomeModule } from '@pages/home/home.module';
import { AppRoutingModule } from '@routes/app.routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AudioControlModule } from '@components/audio-control/audio-control.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MenuModule,
    AudioControlModule,
    FooterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
