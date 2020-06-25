import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestimonialComponent } from './homePage/testimonial/testimonial.component';
import { HomeComponent } from './homePage/home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { QuoteFormComponent } from './homePage/quote-form/quote-form.component';
import { SolarComponent } from './packages/solar/solar.component';
import { GeneratorComponent } from './packages/generator/generator.component';
import {MailerService} from './packages/mailer.service';


@NgModule({
  declarations: [
    AppComponent,
    TestimonialComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    QuoteFormComponent,
    SolarComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MailerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
