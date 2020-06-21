import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestimonialComponent } from './homePage/testimonial/testimonial.component';
import { HomeComponent } from './homePage/home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { QuoteFormComponent } from './homePage/quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestimonialComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
